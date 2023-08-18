import React from "react";
import { createElement } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import { createRoutesFromElements } from "react-router-dom";

const PopoverContext = createContext();

const Popover = ({ as = "div", children, ...props }) => {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef();
  if (typeof children !== 'function'){
    const Button = children.find((c) => c.type.name === "Button");
    const Panel = children.find((c) => c.type.name === "Panel");
  } else{
  
  }
  
  const data = {
    open,
    toggle: () => setOpen(!open),
    close: () => setOpen(false),
    buttonRef,
  };
  console.log(children({open}).props)
  const resChildren = ({open}) => (
    <>
      {Button}
      {open && Panel}
    </>
  );
  return (
    <PopoverContext.Provider value={data}>
      {createElement(as, {
        ...props,
      }, 
      
        resChildren
      )}
    </PopoverContext.Provider>
  );
};

export default Popover;

const Button = ({ as = "button", children, ...props }) => {
  const { toggle, buttonRef } = useContext(PopoverContext);
  return createElement(
    as,
    {
      onClick: () => toggle(),
      ref: buttonRef,
      ...props,
    },
    children
  );
};

const Panel = ({ as = "nav", children, ...props }) => {
  const { close, buttonRef } = useContext(PopoverContext);
  const panelRef = useRef();
  useEffect(() => {
    const handleClick = (e) => {
      if (
        !e.composedPath().includes(panelRef.current) &&
        !e.composedPath().includes(buttonRef.current)
      ) {
        close();
      }
    };
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);
  return createElement(
    as,
    {
      ref: panelRef,
      ...props,
    },
    typeof children === "function" ? children(close) : children
  );
};

Popover.Button = Button;
Popover.Panel = Panel;
