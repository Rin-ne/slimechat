import Svg, { Path, Rect, G, Circle, Defs, Filte } from "react-native-svg"
import React from "react"
import theme from "../theme"
import { scale, moderateScale, verticalScale } from "react-native-size-matters"

export const Account = (props) => (
  <Svg height="50" viewBox="0 0 26 26" width="50">
    <Path fill={theme.primary} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
    <Path fill="none" d="M0 0h24v24H0z" />
  </Svg>
)

export const AddPhoto = (props) => (
  <Svg enable-background="new 0 0 24 24" height="40" viewBox="0 0 24 24" width="40">
    <Rect fill="none" height="24" width="24" />
    <Path fill={theme.textColor} d="M3,4V1h2v3h3v2H5v3H3V6H0V4H3z M6,10V7h3V4h7l1.83,2H21c1.1,0,2,0.9,2,2v12c0,1.1-0.9,2-2,2H5c-1.1,0-2-0.9-2-2V10H6z M13,19c2.76,0,5-2.24,5-5s-2.24-5-5-5s-5,2.24-5,5S10.24,19,13,19z M9.8,14c0,1.77,1.43,3.2,3.2,3.2s3.2-1.43,3.2-3.2 s-1.43-3.2-3.2-3.2S9.8,12.23,9.8,14z" />
  </Svg>
)


export const Back = (props) => (
  <Svg height="30" viewBox="0 0 20 20" width="40">
    <Path d="M0 0h24v24H0z" fill="none" />
    <Path fill={theme.primary} d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
  </Svg>
)

export const Coin = (props) => (
  <Svg height="30" viewBox="0 0 22 22" width="30">
    <Path d="M0 0h24v24H0V0z" fill="none" />
    <Path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" fill="#5550a2" />
  </Svg>
)

export const Sent = ({ width, height, fill = theme.secondary }) => (
  <Svg height={height} viewBox="0 0 24 24" width={width}>
    <Path d="M0 0h24v24H0z" fill="none" />
    <Path fill={fill} d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
  </Svg>
)

export const Received = ({ width, height, fill = theme.secondary }) => (
  <Svg height={height} viewBox="0 0 24 24" width={width}>
    <Path d="M0 0h24v24H0z" fill="none" />
    <Path fill={fill} d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z" />
  </Svg>
)

export const Wait = ({ width, height, fill = theme.secondary }) => (
  <Svg enable-background="new 0 0 24 24" height={height} viewBox="0 0 24 24" width={width}>
    <G>
      <Rect fill="none" height="24" width="24" />
      <Rect fill="none" height="24" width="24" />
    </G>
    <G>
      <Path fill={fill} d="M16,22c1.1,0,2-0.9,2-2l-0.01-3.18c0-0.53-0.21-1.03-0.58-1.41L14,12l3.41-3.43c0.37-0.37,0.58-0.88,0.58-1.41L18,4 c0-1.1-0.9-2-2-2H8C6.9,2,6,2.9,6,4v3.16C6,7.69,6.21,8.2,6.58,8.58L10,12l-3.41,3.4C6.21,15.78,6,16.29,6,16.82V20 c0,1.1,0.9,2,2,2H16z M8,7.09V5c0-0.55,0.45-1,1-1h6c0.55,0,1,0.45,1,1v2.09c0,0.27-0.11,0.52-0.29,0.71L12,11.5L8.29,7.79 C8.11,7.61,8,7.35,8,7.09z" />
    </G>
  </Svg>
)

export const Block = (props) => (
  <Svg height="24" viewBox="0 0 24 24" width="24">
    <Path d="M0 0h24v24H0z" fill="none" />
    <Path fill="rgba(255, 110, 120, 1)" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z" />
  </Svg>
)

export const Brush = () => (
  <Svg height="50" viewBox="0 0 26 26" width="50">
    <Path d="M0 0h24v24H0z" fill="none" />
    <Path fill={theme.primary} d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37l-1.34-1.34c-.39-.39-1.02-.39-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41z" />
  </Svg>
)

export const GroupAdd = (props) => (
  <Svg height="24" viewBox="0 0 20 20" width="24">
    <Path d="M0 0h24v24H0z" fill="none" />
    <Path fill={theme.primary} d="M8 10H5V7H3v3H0v2h3v3h2v-3h3v-2zm10 1c1.66 0 2.99-1.34 2.99-3S19.66 5 18 5c-.32 0-.63.05-.91.14.57.81.9 1.79.9 2.86s-.34 2.04-.9 2.86c.28.09.59.14.91.14zm-5 0c1.66 0 2.99-1.34 2.99-3S14.66 5 13 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm6.62 2.16c.83.73 1.38 1.66 1.38 2.84v2h3v-2c0-1.54-2.37-2.49-4.38-2.84zM13 13c-2 0-6 1-6 3v2h12v-2c0-2-4-3-6-3z" />
  </Svg>
)
export const Attachment = ({ width = "35", height = "30" }) => (
  <Svg height={height} viewBox="0 0 20 20" width={width}>
    <Path d="M0 0h24v24H0V0z" fill="none" />
    <Path fill={theme.primary} d="M2 12.5C2 9.46 4.46 7 7.5 7H18c2.21 0 4 1.79 4 4s-1.79 4-4 4H9.5C8.12 15 7 13.88 7 12.5S8.12 10 9.5 10H17v2H9.41c-.55 0-.55 1 0 1H18c1.1 0 2-.9 2-2s-.9-2-2-2H7.5C5.57 9 4 10.57 4 12.5S5.57 16 7.5 16H17v2H7.5C4.46 18 2 15.54 2 12.5z" />
  </Svg>
)

export const Lock = () => (
  <Svg height="50" viewBox="0 0 26 26" width="50">
    <Path d="M0 0h24v24H0z" fill="none" />
    <Path fill={theme.primary} d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
  </Svg>
)


export const Menu = () => (
  <Svg height="24" viewBox="0 0 20 20" width="24">
    <Path d="M0 0h24v24H0z" fill="none" />
    <Path fill={theme.primary} d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
  </Svg>
)

export const Message = ({ width, height }) => (
  <Svg height={height} viewBox="0 0 24 24" width={width}>
    <Path fill={theme.secondary} d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
    <Path d="M0 0h24v24H0z" fill="none" />
  </Svg>
)

export const Money = () => (
  <Svg height={`${verticalScale(75)}`} viewBox="0 0 24 24" width={`${scale(60)}`}>
    <Path fill={theme.secondary} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z" />
    <Path d="M0 0h24v24H0z" fill="none" />
  </Svg>
)

export const More = () => (
  <Svg height="30" viewBox="0 0 24 24" width="30">
    <Path d="M0 0h24v24H0z" fill="none" />
    <Path fill={theme.primary} d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
  </Svg>
)

export const Notification = () => (
  <Svg height="50" viewBox="0 0 26 26" width="50">
    <Path fill={theme.primary} d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
  </Svg>
)

export const Search = () => (
  <Svg height="24" viewBox="0 0 20 20" width="24">
    <Path fill={theme.primary} d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
    <Path d="M0 0h24v24H0z" fill="none" />
  </Svg>
)

export const Send = () => (
  <Svg height="30" viewBox="0 0 24 24" width="30">
    <Path fill={theme.primary} d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
    <Path d="M0 0h24v24H0z" fill="none" />
  </Svg>
)