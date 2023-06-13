import { z } from 'zod'

export const weatherSchema = z.object({
    LocalObservationDateTime: z.string(),
    EpochTime: z.number(),
    WeatherText: z.string(),
    WeatherIcon: z.number(),
    HasPrecipitation: z.boolean(),
    PrecipitationType: z.string().nullable(),
    IsDayTime: z.boolean(),
    Temperature: z.object({
        Metric: z.object({
            Value: z.number(),
            Unit: z.string(),
            UnitType: z.number(),
        }),
        Imperial: z.object({
            Value: z.number(),
            Unit: z.string(),
            UnitType: z.number(),
        }),
    }),
    MobileLink: z.string(),
    Link: z.string(),
})

export type Weather = z.infer<typeof weatherSchema>
