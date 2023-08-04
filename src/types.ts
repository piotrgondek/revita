import { ListItemTextProps } from "@mui/material";

export type ListCard = {
  title: string;
  subheader?: string;
  items: Array<Pick<ListItemTextProps, "primary" | "secondary">>;
};
