import { useTranslations } from "next-intl"
import OutLink from "./OutLink"

export default function GitHubLink () {
    const t = useTranslations("General")
    return <OutLink link="https://github.com/ebsaral/saral.me" text={t("github_source")} />
}