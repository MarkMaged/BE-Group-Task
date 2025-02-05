import { ReactNode } from "react";

export type FactultyAPICreate = {
    faculty_id: Number,
    name_en: String | null,
    name_ar: String,
    certifacte_merit: String

}

export interface PanelCodeHighlightProps {
    children: ReactNode;
    title?: string;
    codeHighlight?: string;
    id?: string;
    className?: string;
}