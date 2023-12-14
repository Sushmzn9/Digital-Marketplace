"use client";

import { useState } from "react";

function NavItems() {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);
  return <div className="flex gap-4 h-full">NavItems</div>;
}

export default NavItems;
