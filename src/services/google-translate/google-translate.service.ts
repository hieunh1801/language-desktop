import { objectToQueryString } from "../../util/object.util";
import { Translate } from "./google-translate.type";

const googleTranslateService = {
  translate: async (
    sentence: string,
    sourceLanguage: string = "en",
    targetLanguage: string = "vi"
  ) => {
    const queryOptions = {
      sl: sourceLanguage,
      tl: targetLanguage,
      q: sentence,
    };
    const queryString = objectToQueryString(queryOptions);
    const url =
      "https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=vi&hl=en-US&dt=t&dt=bd&dj=1&source=icon&tk=154988.154988&" +
      queryString;

    const response = await fetch(url);
    const data: Translate = await response?.json();
    return data;
  },
};
