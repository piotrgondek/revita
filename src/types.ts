import { ListItemTextProps } from "@mui/material";

export interface ListCard {
  title: string;
  subheader?: string;
  items: Pick<ListItemTextProps, "primary" | "secondary">[];
}
