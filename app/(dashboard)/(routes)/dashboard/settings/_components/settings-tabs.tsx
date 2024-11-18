import useSettingsFilter from "@/hooks/useSettingsFilter";
import { Tab, Tabs } from "@nextui-org/react";

export const SettingsTab = () => {
  const { activeItem, setActiveItem } = useSettingsFilter();

  return (
    <Tabs
      variant={"underlined"}
      aria-label="Tabs variants"
      selectedKey={activeItem}
      onSelectionChange={setActiveItem as any}
    >
      <Tab key="API Access" title="API Access" />
      <Tab key="Customize Profile" title="Customize Profile" />
    </Tabs>
  );
};

