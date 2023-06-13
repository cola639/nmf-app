import React from "react";
import { ScrollView, View } from "react-native";

import { Text, StickersImage } from "components";
import { t } from "utils";
import { NavStatelessComponent } from "interfaces";

import styles from "./SupportUsScreen.styles";
import navigationOptions from "./SupportUsScreen.navigationOptions";

const SupportUsScreen: NavStatelessComponent = () => (
  <ScrollView style={styles.container}>
    <StickersImage sticker="restaurant" />
    <Text.H2 style={styles.title}>{t("SUPPORT_US_SCREEN_WHY_DONATE_TITLE")}</Text.H2>
    <Text.Primary style={styles.paragraph}>
      {t("SUPPORT_US_SCREEN_WHY_DONATE_CONTENT")}
    </Text.Primary>
    <Text.Primary style={styles.paragraph}>
      {t("SUPPORT_US_SCREEN_TITLE_CONSIDER_DONATE")}
    </Text.Primary>
    <Text.Primary style={styles.paragraph}>{t("SUPPORT_US_SCREEN_PLATFORM")}</Text.Primary>
    <Text.Link url="https://ko-fi.com/pierrebresson" style={styles.paragraph}>
      Pierre Bresson - Ko-fi
    </Text.Link>
    <View style={styles.separator} />
  </ScrollView>
);

SupportUsScreen.navigationOptions = navigationOptions();

export default SupportUsScreen;
