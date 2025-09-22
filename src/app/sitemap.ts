import { MetadataRoute } from "next"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

        return[
            {
                url: 'https://mohonconbuilds.co.in/',
                lastModified: new Date(),
            }
        ]
}