import React, { useState } from "react";
import {
  Button,
  DimensionValue,
  FlatList,
  Modal,
  StyleSheet,
  TextInputProps,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles as defaultStyles } from "../config/styles";
import { IconName } from "../types";

import { AppText, CategoryPickerItem, PickerItem, Screen } from ".";

interface item {
  label: string;
  value: number;
}

export interface IAppPicker extends TextInputProps {
  icon?: IconName;
  items: item[];
  placeholder?: string;
  selectedItem?: item;
  width?: DimensionValue;
  numberOfColumns?: number;
  onSelectItem?: (item: item) => void;
  PickerItemComponent?: typeof PickerItem | typeof CategoryPickerItem;
}

export const AppPicker = ({
  icon,
  placeholder,
  items,
  selectedItem,
  onSelectItem,
  width = "100%",
  numberOfColumns = 1,
  PickerItemComponent = PickerItem,
}: IAppPicker) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width }]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.colors.medium}
              style={styles.icon}
            />
          )}

          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}

          <MaterialCommunityIcons
            name={"chevron-down"}
            size={20}
            color={defaultStyles.colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            numColumns={numberOfColumns}
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                onPress={() => {
                  setModalVisible(false);
                  if (onSelectItem) {
                    onSelectItem(item);
                  }
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  text: { flex: 1 },
  placeholder: {
    color: defaultStyles.colors.medium,
    flex: 1,
  },
  icon: {
    marginRight: 10,
  },
});
