


Panel = function(element, opts)
{
	this.init(element);

Panel.setOptions(this, opts);

	this.attachBehaviors();
};

Panel.prototype.init = function(element)
{
	this.element = this.getElement(element);
	this.focusElement = null;
	this.hoverClass = "PanelTabHover";
	this.openClass = "PanelOpen";
	this.closedClass = "PanelClosed";
	this.focusedClass = "PanelFocused";
	this.enableAnimation = true;
	this.enableKeyboardNavigation = true;
	this.animator = null;
	this.hasFocus = false;
	this.contentIsOpen = true;
};

Panel.prototype.getElement = function(ele)
{
	if (ele && typeof ele == "string")
		return document.getElementById(ele);
	return ele;
};

Panel.prototype.addClassName = function(ele, className)
{
	if (!ele || !className || (ele.className && ele.className.search(new RegExp("\\b" + className + "\\b")) != -1))
		return;
	ele.className += (ele.className ? " " : "") + className;
};

Panel.prototype.removeClassName = function(ele, className)
{
	if (!ele || !className || (ele.className && ele.className.search(new RegExp("\\b" + className + "\\b")) == -1))
		return;
	ele.className = ele.className.replace(new RegExp("\\s*\\b" + className + "\\b", "g"), "");
};

Panel.prototype.hasClassName = function(ele, className)
{
	if (!ele || !className || !ele.className || ele.className.search(new RegExp("\\b" + className + "\\b")) == -1)
		return false;
	return true;
};

Panel.prototype.setDisplay = function(ele, display)
{
	if( ele )
		ele.style.display = display;
};

Panel.setOptions = function(obj, optionsObj, ignoreUndefinedProps)
{
	if (!optionsObj)
		return;
	for (var optionName in optionsObj)
	{
		if (ignoreUndefinedProps && optionsObj[optionName] == undefined)
			continue;
		obj[optionName] = optionsObj[optionName];
	}
};

Panel.prototype.onTabMouseOver = function()
{
	this.addClassName(this.getTab(), this.hoverClass);
};

Panel.prototype.onTabMouseOut = function()
{
	this.removeClassName(this.getTab(), this.hoverClass);
};

Panel.prototype.open = function()
{
	this.contentIsOpen = true;
	if (this.enableAnimation)
	{
		if (this.animator)
			this.animator.stop();
		this.animator = new Panel.PanelAnimator(this, true);
		this.animator.start();
	}
	else
		this.setDisplay(this.getContent(), "block");

	this.removeClassName(this.element, this.closedClass);
	this.addClassName(this.element, this.openClass);
};

Panel.prototype.close = function()
{
	this.contentIsOpen = false;
	if (this.enableAnimation)
	{
		if (this.animator)
			this.animator.stop();
		this.animator = new Panel.PanelAnimator(this, false);
		this.animator.start();
	}
	else
		this.setDisplay(this.getContent(), "none");

	this.removeClassName(this.element, this.openClass);
	this.addClassName(this.element, this.closedClass);
};

Panel.prototype.onTabClick = function()
{
	if (this.isOpen())
		this.close();
	else
		this.open();
	this.focus();
};

Panel.prototype.onFocus = function(e)
{
	this.hasFocus = true;
	this.addClassName(this.element, this.focusedClass);
};

Panel.prototype.onBlur = function(e)
{
	this.hasFocus = false;
	this.removeClassName(this.element, this.focusedClass);
};

Panel.ENTER_KEY = 13;
Panel.SPACE_KEY = 32;

Panel.prototype.onKeyDown = function(e)
{
	var key = e.keyCode;
	if (!this.hasFocus || (key != Panel.ENTER_KEY && key != Panel.SPACE_KEY))
		return true;
	
	if (this.isOpen())
		this.close();
	else
		this.open();

	if (e.stopPropagation)
		e.stopPropagation();
	if (e.preventDefault)
		e.preventDefault();

	return false;
};

Panel.prototype.attachPanelHandlers = function()
{
	var tab = this.getTab();
	if (!tab)
		return;

	var self = this;
	Panel.addEventListener(tab, "click", function(e) { return self.onTabClick(); }, false);
	Panel.addEventListener(tab, "mouseover", function(e) { return self.onTabMouseOver(); }, false);
	Panel.addEventListener(tab, "mouseout", function(e) { return self.onTabMouseOut(); }, false);

	if (this.enableKeyboardNavigation)
	{
		
		
		var tabIndexEle = null;
		var tabAnchorEle = null;

		this.preorderTraversal(tab, function(node) {
			if (node.nodeType == 1 /* NODE.ELEMENT_NODE */)
			{
				var tabIndexAttr = tab.attributes.getNamedItem("tabindex");
				if (tabIndexAttr)
				{
					tabIndexEle = node;
					return true;
				}
				if (!tabAnchorEle && node.nodeName.toLowerCase() == "a")
					tabAnchorEle = node;
			}
			return false;
		});

		if (tabIndexEle)
			this.focusElement = tabIndexEle;
		else if (tabAnchorEle)
			this.focusElement = tabAnchorEle;

		if (this.focusElement)
		{
			Panel.addEventListener(this.focusElement, "focus", function(e) { return self.onFocus(e); }, false);
			Panel.addEventListener(this.focusElement, "blur", function(e) { return self.onBlur(e); }, false);
			Panel.addEventListener(this.focusElement, "keydown", function(e) { return self.onKeyDown(e); }, false);
		}
	}
};

Panel.addEventListener = function(element, eventType, handler, capture)
{
	try
	{
		if (element.addEventListener)
			element.addEventListener(eventType, handler, capture);
		else if (element.attachEvent)
			element.attachEvent("on" + eventType, handler);
	}
	catch (e) {}
};

Panel.prototype.preorderTraversal = function(root, func)
{
	var stopTraversal = false;
	if (root)
	{
		stopTraversal = func(root);
		if (root.hasChildNodes())
		{
			var child = root.firstChild;
			while (!stopTraversal && child)
			{
				stopTraversal = this.preorderTraversal(child, func);
				try { child = child.nextSibling; } catch (e) { child = null; }
			}
		}
	}
	return stopTraversal;
};

Panel.prototype.attachBehaviors = function()
{
	var panel = this.element;
	var tab = this.getTab();
	var content = this.getContent();

	if (this.contentIsOpen || this.hasClassName(panel, this.openClass))
	{
		this.removeClassName(panel, this.closedClass);
		this.setDisplay(content, "block");
		this.contentIsOpen = true;
	}
	else
	{
		this.removeClassName(panel, this.openClass);
		this.addClassName(panel, this.closedClass);
		this.setDisplay(content, "none");
		this.contentIsOpen = false;
	}

	this.attachPanelHandlers();
};

Panel.prototype.getTab = function()
{
	return this.getElementChildren(this.element)[0];
};

Panel.prototype.getContent = function()
{
	return this.getElementChildren(this.element)[1];
};

Panel.prototype.isOpen = function()
{
	return this.contentIsOpen;
};

Panel.prototype.getElementChildren = function(element)
{
	var children = [];
	var child = element.firstChild;
	while (child)
	{
		if (child.nodeType == 1 )
			children.push(child);
		child = child.nextSibling;
	}
	return children;
};

Panel.prototype.focus = function()
{
	if (this.focusElement && this.focusElement.focus)
		this.focusElement.focus();
};



Panel.PanelAnimator = function(panel, doOpen, opts)
{
	this.timer = null;
	this.interval = 0;
	this.stepCount = 0;

	this.fps = 0;
	this.steps = 10;
	this.duration = 500;
	this.onComplete = null;

	this.panel = panel;
	this.content = panel.getContent();
	this.panelData = [];
	this.doOpen = doOpen;

	Panel.setOptions(this, opts);


	

	if (this.fps > 0)
	{
		this.interval = Math.floor(1000 / this.fps);
		this.steps = parseInt((this.duration + (this.interval - 1)) / this.interval);
	}
	else if (this.steps > 0)
		this.interval = this.duration / this.steps;

	var c = this.content;

	var curHeight = c.offsetHeight ? c.offsetHeight : 0;
	
	if (doOpen && c.style.display == "none")
		this.fromHeight = 0;
	else
		this.fromHeight = curHeight;

	if (!doOpen)
		this.toHeight = 0;
	else
	{
		if (c.style.display == "none")
		{
			

			c.style.visibility = "hidden";
			c.style.display = "block";
		}


		c.style.height = "";
		this.toHeight = c.offsetHeight;


	}

	this.increment = (this.toHeight - this.fromHeight) / this.steps;
	this.overflow = c.style.overflow;

	c.style.height = this.fromHeight + "px";
	c.style.visibility = "visible";
	c.style.overflow = "hidden";
	c.style.display = "block";
};

Panel.PanelAnimator.prototype.start = function()
{
	var self = this;
	this.timer = setTimeout(function() { self.stepAnimation(); }, this.interval);
};

Panel.PanelAnimator.prototype.stop = function()
{
	if (this.timer)
	{
		clearTimeout(this.timer);



		if (this.stepCount < this.steps)
			this.content.style.overflow = this.overflow;
	}

	this.timer = null;
};

Panel.PanelAnimator.prototype.stepAnimation = function()
{
	++this.stepCount;

	this.animate();

	if (this.stepCount < this.steps)
		this.start();
	else if (this.onComplete)
		this.onComplete();
};

Panel.PanelAnimator.prototype.animate = function()
{
	if (this.stepCount >= this.steps)
	{
		if (!this.doOpen)
			this.content.style.display = "none";
		this.content.style.overflow = this.overflow;
		this.content.style.height = this.toHeight + "px";
	}
	else
	{
		this.fromHeight += this.increment;
		this.content.style.height = this.fromHeight + "px";
	}
};

