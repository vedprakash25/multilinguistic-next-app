import { useTranslations } from "next-intl";

export default function LocaleIndex() {
  const t = useTranslations("Index");
  return (
    <div className="h-[80vh] flex justify-center items-center">
      <h1 className="text-2xl">{t("title")}</h1>
    </div>
  );
}
