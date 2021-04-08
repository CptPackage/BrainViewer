const MEDIA_TYPE = { IMG: "IMG", VID: "VID" };
const createArticle = (
  mediaType = null,
  media = "",
  title = "",
  content = ""
) => ({ mediaType, media, title, content });
const InnerSections = [
  createArticle(MEDIA_TYPE.IMG, "", "", ""),
  createArticle(MEDIA_TYPE.IMG, "", "", ""),
  createArticle(MEDIA_TYPE.IMG, "", "", ""),
  createArticle(MEDIA_TYPE.IMG, "", "", ""),
  createArticle(MEDIA_TYPE.IMG, "", "", ""),
  createArticle(MEDIA_TYPE.IMG, "", "", ""),
  createArticle(MEDIA_TYPE.IMG, "", "", ""),
  createArticle(MEDIA_TYPE.IMG, "", "", ""),
  createArticle(MEDIA_TYPE.IMG, "", "", ""),
  createArticle(MEDIA_TYPE.IMG, "", "", ""),
  createArticle(MEDIA_TYPE.IMG, "", "", ""),
  createArticle(MEDIA_TYPE.IMG, "", "", ""),
  createArticle(MEDIA_TYPE.IMG, "", "", ""),
  createArticle(MEDIA_TYPE.IMG, "", "", ""),
  createArticle(MEDIA_TYPE.IMG, "", "", ""),
];
