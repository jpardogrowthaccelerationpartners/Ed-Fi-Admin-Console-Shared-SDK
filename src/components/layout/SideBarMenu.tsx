import { Flex } from "@chakra-ui/react";
import useSideBarMenu from "../../hooks/useSideBarMenu";
import { SideBarMenuItemData } from "./SideBar";
import SideBarMenuAccordionItem from "./SideBarMenuAccordionItem";
import SideBarMenuItem from "./SideBarMenuItem";

interface SideBarMenuProps {
  showText: boolean;
  selectedItemId: string;
  currentType:
    | boolean
    | "time"
    | "page"
    | "false"
    | "true"
    | "step"
    | "location"
    | "date"
    | undefined;
  items: SideBarMenuItemData[];
  borderColor?: string;
  backgroundColor?: string;
  activeColor?: string;
  activeSubItemColor?: string;
  hoverSubItemColor?: string;
  hoverColor?: string;
  textColor?: string;
  onClickItem: (id: string) => any;
  onExpand: () => void;
  currentUserAccessRole?: string;
}

const SideBarMenu = ({
  items,
  selectedItemId,
  currentType,
  showText,
  borderColor,
  backgroundColor,
  activeColor,
  activeSubItemColor,
  hoverSubItemColor,
  hoverColor,
  textColor,
  onClickItem,
  onExpand,
  currentUserAccessRole,
}: SideBarMenuProps) => {
  const { accordions, selectedAccordionId, onToggleAccordion } = useSideBarMenu(
    {
      items,
      showText,
      onExpand,
    }
  );

  const isAccessibleToUser = (
    item: SideBarMenuItemData,
    currentUserRole?: string
  ) => {
    if (currentUserRole) {
      return item.accessibleByRole?.includes(currentUserRole);
    } else {
      return true;
    }
  };

  return (
    <Flex
      flexDirection="column"
      marginTop="40px"
      justifyContent="center"
      overflow="hidden"
      w="auto"
    >
      {items.map(
        (item, key) =>
          isAccessibleToUser(item, currentUserAccessRole) && (
            <Flex
              key={key}
              alignItems="center"
              justifyContent="center"
              padding="6px 0px"
              _notLast={{
                borderBottom: "2px",
                borderBottomColor: borderColor ?? "#5870bf",
              }}
            >
              {!item.subItems && (
                <SideBarMenuItem
                  item={item}
                  selectedItemId={selectedItemId}
                  showText={showText}
                  currentType={currentType}
                  backgroundColor={backgroundColor}
                  activeColor={activeColor}
                  hoverColor={hoverColor}
                  textColor={textColor}
                  onClickItem={onClickItem}
                />
              )}
              {item.subItems && item.subItems.length > 0 && (
                <SideBarMenuAccordionItem
                  item={item}
                  showText={showText}
                  isOpen={
                    accordions.find(
                      (accordion) => accordion.accordionId === item.id
                    )?.isOpen
                      ? true
                      : false
                  }
                  selectedItemId={selectedItemId}
                  backgroundColor={backgroundColor}
                  activeColor={activeColor}
                  activeSubItemColor={activeSubItemColor}
                  hoverColor={hoverColor}
                  hoverSubItemColor={hoverSubItemColor}
                  textColor={textColor}
                  selectedAccordionId={selectedAccordionId}
                  onToggleAccordion={onToggleAccordion}
                  onClickItem={onClickItem}
                />
              )}
            </Flex>
          )
      )}
    </Flex>
  );
};

export default SideBarMenu;
