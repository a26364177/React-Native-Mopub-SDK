import { NativeEventEmitter, NativeModules } from "react-native";
const { RNAppOpenAd } = NativeModules;

export interface IRNAppOpenAd {
  addEventListener: (eventType: string, listener: (arg: any) => void) => void;
  initializeInterstitialAd: (adUnitId: string) => void;
  loadAd: () => void;
  isReady: () => Promise<boolean>;
  removeAllListeners: (eventType: string) => void;
  setKeywords: (keywords: string) => void;
  show: () => void;
}

const emitter = new NativeEventEmitter(RNAppOpenAd);

export default {
  addEventListener: (eventType, listener) => emitter.addListener(eventType, listener),
  initializeInterstitialAd: (adUnitId) => RNAppOpenAd.initializeInterstitialAd(adUnitId),
  isReady: () => RNAppOpenAd.isReady(),
  loadAd: () => RNAppOpenAd.loadAd(),
  removeAllListeners: (eventType) => emitter.removeAllListeners(eventType),
  setKeywords: (keywords) => RNAppOpenAd.setKeywords(keywords),
  show: () => RNAppOpenAd.show(),
} as IRNAppOpenAd;
