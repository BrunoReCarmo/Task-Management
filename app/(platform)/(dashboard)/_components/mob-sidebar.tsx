"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { useMobileSidebar } from "@/hooks/use-mob-sidebar";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Sidebar } from "./sidebar";

export const MobileSidebar = () => {
    const pathname = usePathname();
    const [isMounted, setIsMounted] = useState(false);

    const onExpand = useMobileSidebar((state) => state.onExpand);
    const onClose = useMobileSidebar((state) => state.onClose);
    const isExpand = useMobileSidebar((state) => state.isExpand);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        onClose();
    }, [pathname, onClose]);

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <Button
                onClick={onExpand}
                className="block md:hidden mr-2"
                variant="ghost"
                size="sm">
                <Menu className="h-4 w-4" />
            </Button>
            <Sheet open={isExpand} onExpandChange={onClose}>
                <SheetContent
                    side="left"
                    className="p-2 pt-10">
                    <Sidebar
                        storageKey="t-side-mob-state"
                    />
                </SheetContent>
            </Sheet>
        </>
    )
}
