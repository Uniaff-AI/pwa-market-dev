import {
  Dialog as DialogRoot,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog";
import type {PropsWithChildren} from "react";

interface DialogProps extends PropsWithChildren{

}

const Dialog = ({ children }: DialogProps) => {
  return (
    <DialogRoot>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="h-[75vh] w-5/6 p-0 border-none bg-transparent z-150 flex items-center justify-center shadow-none outline-none">
        <div className={'w-full'}>
          {children}
        </div>
      </DialogContent>
    </DialogRoot>
  );
};

export default Dialog;