import { Button } from "@/components/ui/button"
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"

const page = () => {
    const DRAWER_SIDES = ["top", "bottom", "left", "right"] as const;



    return (
        <div className="flex flex-col gap-4 justify-center items-center min-h-screen">
            <ResizablePanelGroup
                orientation="horizontal"
                className="max-w-lg rounded-lg border "
            >
                <ResizablePanel defaultSize="50%">
                    <div className="flex h-[200px] items-center justify-center p-6">
                        <span className="font-semibold">Sample</span>
                    </div>
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel defaultSize="50%">
                    <ResizablePanelGroup orientation="vertical">
                        <ResizablePanel defaultSize="25%">
                            <div className="flex h-full items-center justify-center p-6">
                                <span className="font-semibold">Two</span>
                            </div>
                        </ResizablePanel>
                        <ResizableHandle withHandle />
                        <ResizablePanel defaultSize="75%">
                            <div className="flex h-full items-center justify-center p-6">
                                <span className="font-semibold">Three</span>
                            </div>
                        </ResizablePanel>
                    </ResizablePanelGroup>
                </ResizablePanel>
            </ResizablePanelGroup>


            <div>
                {DRAWER_SIDES.map((side) => (
                    <Drawer key={side} direction={side === "bottom" ? undefined : (side as "top" | "left" | "right")}>
                        <DrawerTrigger asChild>
                            <Button variant='outline' className="cursor-pointer">{side}</Button>
                        </DrawerTrigger>
                        <DrawerContent>
                            <DrawerHeader>
                                <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                                <DrawerDescription>This action cannot be undone.</DrawerDescription>
                            </DrawerHeader>
                            <DrawerFooter>
                                <Button>Submit</Button>
                                <DrawerClose>
                                    <Button variant="outline">Cancel</Button>
                                </DrawerClose>
                            </DrawerFooter>
                        </DrawerContent>
                    </Drawer>
                ))}
            </div>
        </div>
    )
}

export default page