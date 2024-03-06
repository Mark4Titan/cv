// IcoPack.tsx
import React from "react";
import DoNotDisturbAltIcon from "@mui/icons-material/DoNotDisturbAlt";
import SaveIcon from "@mui/icons-material/Save";
import EditIcon from "@mui/icons-material/Edit";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import UpdateIcon from "@mui/icons-material/Update";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import FormatClearIcon from "@mui/icons-material/FormatClear";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SignpostIcon from "@mui/icons-material/Signpost";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import PersonIcon from "@mui/icons-material/Person";
import AssistantPhotoIcon from "@mui/icons-material/AssistantPhoto";
import CarCrashIcon from "@mui/icons-material/CarCrash";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import EngineeringIcon from "@mui/icons-material/Engineering";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LoginIcon from "@mui/icons-material/Login";
import WrongLocationIcon from "@mui/icons-material/WrongLocation";
import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt";

const iconComponents: { [key: string]: React.ElementType } = {
  Menu: MenuIcon,
  Save: SaveIcon,
  View: FileOpenIcon,
  Update: UpdateIcon,
  Clear: FormatClearIcon,
  Edit: EditIcon,
  Create: NoteAddIcon,
  Delete: DeleteForeverIcon,

  ArrowDown: KeyboardArrowDownIcon,
  ArrowUp: KeyboardArrowUpIcon,

  Visibility: Visibility,
  VisibilityOff: VisibilityOff,
  Tool: ArchitectureIcon,

  Circle: AccountCircle,
  Arrow: ArrowForwardIosSharpIcon,
  ArrowRight: KeyboardArrowRightIcon,
  ArrowLeft: KeyboardArrowLeftIcon,
  Buy: ShoppingCartIcon,
  Share: ShareIcon,
  Favorite: FavoriteBorderIcon,
  AddToPost: SignpostIcon,
  Close: CloseIcon,
  Add: AddIcon,
  Remove: RemoveIcon,
  User: InsertEmoticonIcon,
  Person: PersonIcon,

  InWork: AssistantPhotoIcon,
  Accepted: CarCrashIcon,
  Cancelled: WrongLocationIcon,
  Sent: ProductionQuantityLimitsIcon,

  Constructor: EngineeringIcon,
  GetRepord: ContentPasteSearchIcon,
  Summarize: AssignmentOutlinedIcon,
  Tablet: BackupTableIcon,
  Account: ManageAccountsIcon,
  Logout: LogoutIcon,
  SUp: PersonAddIcon,
  SIn: LoginIcon,

  Question: PsychologyAltIcon,

  // sdd:sdd,
};

// <Icons ico='Clear' />

export interface IconsProps {
  ico: string;
  fontSize: "inherit" | "default" | "small" | "large";
}

const Icons = ({ ico = "AcUnitIcon", ...props }: Partial<IconsProps>) => {
  const IconComp = iconComponents[ico];

  if (!IconComp) {
    return <DoNotDisturbAltIcon />;
  }

  return <IconComp {...props} />;
};

export default Icons;
