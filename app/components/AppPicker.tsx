import React, { Dispatch, useState } from "react";
import {
  Button,
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
import { AppText } from "./AppText";
import { Screen } from "./Screen";
import { PickerItem } from "./PickerItem";

interface item {
  label: string;
  value: number;
}

export interface IAppPicker extends TextInputProps {
  icon?: IconName;
  items: item[];
  placeholder?: string;
  selectedItem?: item;
  onSelectItem?: (item: item) => void;
}

export const AppPicker = ({
  icon,
  placeholder,
  items,
  selectedItem,
  onSelectItem,
}: IAppPicker) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
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
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
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
    width: "100%",
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
