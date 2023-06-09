import { lazy } from "react";
import Buttom from "./Buttom";
import Note from "./Note";
import Modal from "./Modal";
import TextLink from "./TextLink";
import NotebookSheet from "./NotebookSheet";
const Header = lazy(async () => await import("./Header"));
const Loading = lazy(async () => await import("./Loading"));

export { Buttom, Note, Modal, TextLink, NotebookSheet, Header, Loading };
