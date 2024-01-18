"use client";

import Link from "next/link";
import { Plus } from "lucide-react";
import { useLocalStorage } from "usehooks-ts";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Accordion } from "@/components/ui/accordion";

import { NavItem, Organization } from "./nav-item";

interface SidebarProps {
    storageKey?: string;
};

export const Sidebar = ({ storageKey = "t-sidebar-state", }: SidebarProps) => {
    const [opened, SetOpened] = useLocalStorage<Record<string, any>>
        (storageKey,
            {}
        );

    const {
        organization: activeOrganization,
        isLoaded: isLoadedOrganization } = useOrganization();

    const {
        userMemberships,
        isLoaded: isLoadedOrganizationList
    } = useOrganizationList({
        userMemberships: {
            infinite: true,
        },
    });

    const defaultAccordionValue: string[] = Object.keys(opened)
        .reduce((acc: string[], key: string) => {
            if (opened[key]) {
                acc.push(key);
            }

            return acc;
        }, []);

    const onOpen = (id: string) => {
        SetOpened((curr) => ({
            ...curr,
            [id]: !opened[id],
        }));
    };

    if (!isLoadedOrganization || !isLoadedOrganizationList || userMemberships.isLoading) {
        return (
            <>
                <div className="flex items-center justify-beetween mb-2 ">
                    <Skeleton className="h-10 w-[60%] " />
                    <Skeleton className="h-10 w-10 " />
                </div>
                <div className="space-y-2">
                    <NavItem.Skeleton />
                    <NavItem.Skeleton />
                    <NavItem.Skeleton />
                </div>
            </>

        )
    }

    return (
        <>
            <div className="font-medium text-xs flex items-center mb-1">
                <span className="pl-4">
                    Workspaces
                </span>
                <Button
                    asChild
                    type="button"
                    size="icon"
                    variant="ghost"
                    className="ml-auto">
                    <Link href="/select-org">
                        <Plus
                            className="h-4 w-4" />
                    </Link>
                </Button>
            </div>
            <Accordion
                type="multiple"
                defaultValue={defaultAccordionValue}
                className="space-y-2"
            >
                {userMemberships.data.map(({ organization }) => (
                    <NavItem
                        key={organization.id}
                        isActive={activeOrganization?.id === organization.id}
                        isOpened={opened[organization.id]}
                        organization={organization as Organization}
                        onOpen={onOpen}
                    />
                ))}
            </Accordion>
        </>
    );
};