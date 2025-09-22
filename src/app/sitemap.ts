import { MetadataRoute } from "next"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

        return[
            {
                url: 'https://mohanconbuilds.co.in/',
                lastModified: new Date(),
            }
        ]
}