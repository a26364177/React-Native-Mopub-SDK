import { IAdLibSDK } from './src/AdLibSDK';
import { IRNMoPubInterstitial } from "./src/RNMoPubInterstitial";
import { IRNAppOpenAd } from "./src/RNAppOpenAd";
import { IRNMoPubRewardedVideo } from "./src/RNMoPubRewardedVideo";
import { IRNNativeAdViewProps, type NativeAdDataType } from './src/RNNativeAdView'

declare module "react-native-mopub-sdk" {
  export const AdLibSDK: IAdLibSDK;
  export const RNMoPubInterstitial: IRNMoPubInterstitial;
  export const RNAppOpenAd: IRNAppOpenAd;
  export const RNMoPubRewardedVideo: IRNMoPubRewardedVideo;
  export const RNNativeAdView: React.FunctionComponent<IRNNativeAdViewProps>;
  export type NativeAdData = NativeAdDataType;
}