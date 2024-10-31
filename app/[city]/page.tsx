"use client"

import { useParams } from "next/navigation"
import useSWR from "swr";
import WeatherCard from "@/components/weatherCard";
import styled from "styled-components";
import { Weather } from "@/interfaces/weather";

const WeatherWrapper = styled.main`
    width : 100vw;
    height : 100vh;
    margin : auto;
    background-color : #f6f7eb;
`;

const CityName = styled.h1`
    color : #393e41;
`;

const WeatherCardsContainer = styled.div`
    display : flex;
    flex-flow : row wrap;
    justify-content : center;
    border : #e94f37 5px solid;
    border-radius : 5px;
    background : #393e41;
`;

export default function CityPage(){
    const params = useParams();

    const {data, error} = useSWR(`../api/getWeatherData?city=${params.city}`, (url) =>
        fetch(url).then((res) => res.json())
    );

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    const days = data?.days || [];

    return (
        <WeatherWrapper>
            <CityName>{params.city}</CityName>
            <WeatherCardsContainer>
                {
                    days.map((weather : Weather, i : number) =>
                        (<WeatherCard
                            key = {i}
                            datetime={weather.datetime}
                            conditions={weather.conditions}
                            description={weather.description}
                            tempmin={weather.tempmin}
                            tempmax={weather.tempmax}
                        />)
                    )
                }
            </WeatherCardsContainer>
        </WeatherWrapper>
    );
}