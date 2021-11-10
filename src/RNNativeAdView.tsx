import React from "react";
import {
    NativeSyntheticEvent,
    requireNativeComponent,
    StyleProp, ViewStyle
} from "react-native";

const NativeAdView = requireNativeComponent("RNNativeAdView");

export type NativeAdFormat = "list"

interface INativeAdLayout {
    height: number;
    width: number;
}

interface INativeAdError {
    error: string;
}

interface INativeAdMessage {
    message: string;
}

interface IImpressionData {
    impressionData: any
}

export interface IRNNativeAdViewProps {
    adUnitId: string,
    format: "list",
    children?: React.ReactNode,
    onAdLoaded: (response: any) => void,
    onAdFailed?: (error: INativeAdError) => void,
    onAdOpen?: (message: INativeAdMessage) => void,
    onAdClose?: (message: INativeAdMessage) => void,
    onImpressionData: (jsonImpressionData: any) => void,
    onAdLayout: ({ height, width }: { height: number, width: number }) => void,
    style?: StyleProp<ViewStyle>,
}

export const RNNativeAdView = ({
    adUnitId,
    format,
    children,
    onAdLoaded,
    onAdFailed = () => { },
    onAdOpen,
    onAdClose,
    onImpressionData,
    onAdLayout,
    style
}: IRNNativeAdViewProps) => {
    return (
        <NativeAdView
            adUnitId={adUnitId}
            format={format}
            onNativeAdLoaded={onAdLoaded}
            onNativeAdFailed={(event: NativeSyntheticEvent<INativeAdError>) => onAdFailed(event.nativeEvent)}
            onWillPresentModalForNativeAd={onAdOpen}
            onDidDismissModalForNativeAd={onAdClose}
            onImpressionData={(event: NativeSyntheticEvent<IImpressionData>) => onImpressionData(event.nativeEvent.impressionData)}
            onAdLayout={(event: NativeSyntheticEvent<INativeAdLayout>) => onAdLayout(event.nativeEvent)}
            style={style}
        >
            {children}
        </NativeAdView>
    );
}
export interface NativeAdData {
    adUnitId: string;
    ctatext: string;
    iconimage: string;
    mainimage: string;
    privacyicon: string;
    text: string;
    title: string;
}
