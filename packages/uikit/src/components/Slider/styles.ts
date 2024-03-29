import { InputHTMLAttributes } from "react";
import styled from "styled-components";
import Text from "../Text/Text";

interface SliderLabelProps {
  progress: string;
}

interface StyledInputProps extends InputHTMLAttributes<HTMLInputElement> {
  isMax: boolean;
}

interface DisabledProp {
  disabled?: boolean;
}

const getCursorStyle = ({ disabled = false }: DisabledProp) => {
  return disabled ? "not-allowed" : "cursor";
};

const zodiacSunMax = `"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAiASURBVFjDtVcHUFXpGX0gCiogcO8jqNi7sWREXcWSjTWKXWPUjV3cGUdRF2dQsURdxV6wo9hm0PceoGIbINYxq9Fx7WsFu4IReAUfoCAn73zm3oEtybrZfDN3uNx5//2+/3znnP+7BsMnxBkDPBIUe3uzmhtuMtpizIp1k+uKNavWxUlG2/CkwLxWhv9HmI3WrnuUp3ujqyVbB1SejpBKvRHkXh+BVYJx91Im4ucn4WX6O9xcUoBTfZwZFtWx3eJrb/g/JzapjsbxSubpP1eNhp97IFyP9GvUqFGYOnUqVqxYgQcPHuDs2bPQwn6/BP/40gmzaotLDsgN/kXJE1VHZIT3TqePm6Inbdy4MYYMGSL3NWvWxKBBg3Dy5EkUFhbi2bNnegFXr16Vv47MD0jtnP/UpFjH/OzEMMDtgJKzqbvXWEnk7u6OEydOoGnTpqhSpQrCw8PRo0cPLFmyRC4WNGfOHKxatQqbN2/Gnj17sGXLFrx69UqKKC0Gbi4uhEWxRf9M2HN3hHoO1XfJl65fvx6xsbGYN28eUlJS0K5dO3h5ecl16NAhSZSVlYXt27dj586dKC0thclkwocPH3RUbi0rhFmxzfmPyS2qfUE3rzHlej1w4ECsW7cOs2fPxrJly9CzZ095TjTYkvT0dLx//16SvHnzBps2bcKOHTswcuRIPH/+HJmZmZgyZQqsViu+jSqAOcA29CeSv2ky2XtDadnkvFavXo0+ffrIfY0aNQSFa9euobi4GCtXrsSIESPg4eGBjh07Ii4uDk+fPkVubq5cUVFR0jIWQQSL35Yi7fP8rIM+L5QfFBDr/+1dP7ePTFcURZLOmDFDes9nZLzNZtMhJemaNWuGO3fuCE+0gmvXro2EhAT5TUlJCfr3749t27ZJsQ6HA1nfFLn4YF9fXucBucPDKk+Bp6cnFixYIAsmTZqEsWM/EpE9P3/+PMrG7du3pSX8ffXq1fUCiAbbdOvWLfndmTNnpB12ux1bt27FkSNHcHbI2+IDfoV19QI2+t9Mq+TmKS+YPn066tatK0XwfzJ89+7dct+pUydhNznRq1cv9O7dWxRC5jMJW5SdnS2JO3TogP379yM1NRXJyck4ffr0R1W4CPrPvxeTkEs/9j4o3zjNJ07vPWXFXk6cOBEhISEoKioSAtWrVw9paWkIDQ3F/PnzcfToUVy+fBn9+vWTwvbu3Su7GzZsmOye7woMDJS1jOjo6HIIHm/reCQFJCnWQaGeQ3QIK1asKLDynrLSgr1mMhZx7949gfTRo0fCF19fXwQFBUnvuWvKV3sfnZKxYcMGUYkWVyKdsPjn1TaYVftfa3k00xdQ27NmzYKbm5sk0GLt2rVYuHChSOv169eihtGjR2PmzJnCBRbSvHlznDt3ToinvY/qYDx8+FBQ0iJz3zskGm1/YgEHKv67/9Q1ezdu3Di0aNFCfkgImbRNmzZiSDSX69evY/DgwWjZsiXevXsnBXXt2hW1atWSFtKM6tevL+ogsZ1Op/gDZXnw4EGR5av09zCp1q8Mu5THqSTPtGnTYDabxV4bNGiA9u3by46rVauGXbt2oWHDhtIG6pxEJexcp7ldREQEmjRpIsS8dOmSoPL48WNMmDABN27cwOLFi8WiidCxY8eQceoNzMa85Yb4gMwTlBENhbLr1q2b/CV0TOTn5yfORmQoqZcvX2LNmjW6MWkFcNf0DMJ/4cIFKSAvL09aRV6QA3PnzsXSpUsF1ZzLxR8LMKk5CR1COgm8JB/13aVLF7Rq1Uo3HLaAioiPj8eLFy/k6B0+fLgUQDJSam3btoWqqpg8ebKcD2yZj4+PFEoD4plCV9Qi+6xIMcpgMeZ9HVihrm4mjRo1EjTYP+5ACxYXFhaGu3fvitZZxMaNG3H8+HFxTa4bOnSoKIGzgkZCFs4gTzRFMB4luEioWAe6ELB/8XvPEfoCsp86/74MMzIyUKdOHURGRiInJ0d2RahJsqpVq6Jv374YP368GBN5o71v0aJFsp7oaXOCyPArJ/YH5f/WkBL49jdfem8sdwhxEd2QxGSwz9wJ3YyGRPnxnsymI5IrHExIPrbm1KlT8h5vb28hIIlH1ezbt08vIL1rfqZuxTsDHp6r5OalF8Bddu7cWZhPAtF8+Jwsv3//viiFQwmlSmSYgAcXDyKegrRbSpruR5/o3r27rLly5Yokz7lUgkQ1L67sHDBqQOUIScId0m7ZCqJAedEBaSKarWrGwjOBhxZNSCs+ODhYzgVyg6MaFUROcJChgzK+GetEirHM0Brb8KHnDiXjfhU3H2EvTcXf3x+tW7eWua9ChQqIiYkp5+WUI82GpkL7LuukZX9L8vLMIFIyJ7oGVteUvfdHR+/xVVeVcufUPI/UMWPGyBzAF1NifEYkKD3G8uXLRVraDEELZ0EsjkGVJCYm6sWUlgCpoY7s5OqFdX58/lftaz+rNKDcRERjoYtRmlQHGU9EaFSUJRPw9GPfObBcvHgRhw8flhGOJC0bN792DSOqY/JPz4QGVDhgzElvU6mXXgDRICd4TyJRdmXhLigoEHdjETy66ZL0BfJAmxUZ360schmPdcl/nYq3h6Bigpp99A9ef9GlpNkurZjDCec7kpPkorzYJu6YVkvHI1JPnjyR3ruAwfX5hTz5ln7Kt4G761svJtx7HRT3GmKpLICcoNWSC+w5+88DhpxgC7RgG4RwGSU4HZbvsBjtU3/R15HF+PZ3W5XbGV/4LoA2sJKkGum0Fnw/cu45cTmiAEk1bGmmarYGv8I3Yt6IBCU7PcrXUvpHr3A08fgMqnswAioHwvbKCeezUmT97T2+W1OEMwPz8y1GW2Kiav38V/9K3l/dobpMK8zk+syik7k+t5Isap7JbLRtTlRzIxMVW/cUFT6f8s5/ATor2BiVK14/AAAAAElFTkSuQmCC"`;
const zodiacMoonMain = `"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAyOCAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMSIgeT0iMTkiIHdpZHRoPSIxNyIgaGVpZ2h0PSIxMSIgZmlsbD0iIzFGQzdENCIvPgo8cGF0aCBkPSJNOS41MDcgMjQuNzA2QzguMTQ2MzUgMjYuMDY2NiA5LjczNzk1IDI4LjIzMTMgMTEuNzU1NSAzMC4yNDg5QzEzLjc3MzEgMzIuMjY2NSAxNS45Mzc4IDMzLjg1ODEgMTcuMjk4NCAzMi40OTc0QzE4LjY1OTEgMzEuMTM2OCAxNy45Njg1IDI4LjA3MTEgMTUuOTUwOSAyNi4wNTM1QzEzLjkzMzMgMjQuMDM1OSAxMC44Njc2IDIzLjM0NTMgOS41MDcgMjQuNzA2WiIgZmlsbD0iIzFGQzdENCIvPgo8cGF0aCBkPSJNMTUuNTA3IDIyLjcwNkMxNC4xNDYzIDI0LjA2NjYgMTUuNzM3OSAyNi4yMzEzIDE3Ljc1NTUgMjguMjQ4OUMxOS43NzMxIDMwLjI2NjUgMjEuOTM3OCAzMS44NTgxIDIzLjI5ODQgMzAuNDk3NEMyNC42NTkxIDI5LjEzNjggMjMuOTY4NSAyNi4wNzExIDIxLjk1MDkgMjQuMDUzNUMxOS45MzMzIDIyLjAzNTkgMTYuODY3NiAyMS4zNDUzIDE1LjUwNyAyMi43MDZaIiBmaWxsPSIjMUZDN0Q0Ii8+CjxnIGZpbHRlcj0idXJsKCNmaWx0ZXIwX2QpIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNC4xNDYgNi43NTE1OUMxNC4yMTA1IDcuMTA4OTYgMTQuMjcwMyA3LjQ4MTMxIDE0LjMyODEgNy44NjE2NEMxNC4yMTg5IDcuODU4NjUgMTQuMTA5NSA3Ljg1NzE0IDE0IDcuODU3MTRDMTMuMzgwMyA3Ljg1NzE0IDEyLjc2NDggNy45MDUzOSAxMi4xNTkgNy45OTc3OUMxMS44NzkgNy40MTQ1OCAxMS41NTQ3IDYuODIyNDYgMTEuMTg3MiA2LjIzMTQ1QzguNjk4OTcgMi4yMjk0NyA2LjUzODI2IDEuOTg2NzkgNC42Nzg4MiAyLjk4MzY2QzIuODE5MzggMy45ODA1MiAyLjg1NjI4IDYuNjc2NDQgNS4yNjY5NiA5LjQwNTM4QzUuNTgwNzYgOS43NjA2MSA1LjkwMDk3IDEwLjEzOTggNi4yMjQ3IDEwLjUyODZDMy42OTAxMyAxMi40NjU5IDIgMTUuMjY0NCAyIDE4LjI2OTVDMiAyMy44MjkyIDcuNzg1MTggMjUgMTQgMjVDMjAuMjE0OCAyNSAyNiAyMy44MjkyIDI2IDE4LjI2OTVDMjYgMTQuODY1OCAyMy44MzE4IDExLjcyNzIgMjAuNzI0MyA5LjgwNDc2QzIwLjkwMjIgOC44NjA0NCAyMSA3LjgzMDE5IDIxIDYuNzUxNTlDMjEgMi4xOTYxMiAxOS4yNTQ5IDEgMTcuMTAyMiAxQzE0Ljk0OTUgMSAxMy41MjYxIDMuMzE4NDcgMTQuMTQ2IDYuNzUxNTlaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfYnVubnloZWFkX21haW4pIi8+CjwvZz4KPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMikiPgo8cGF0aCBkPSJNMTIuNzI4NCAxNi40NDQ2QzEyLjc5NiAxNy4zMTQ5IDEyLjQ0NDYgMTkuMDU1NiAxMC40OTggMTkuMDU1NiIgc3Ryb2tlPSIjNDUyQTdBIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPHBhdGggZD0iTTEyLjc0NTcgMTYuNDQ0NkMxMi42NzgxIDE3LjMxNDkgMTMuMDI5NiAxOS4wNTU2IDE0Ljk3NjEgMTkuMDU1NiIgc3Ryb2tlPSIjNDUyQTdBIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPHBhdGggZD0iTTkgMTQuNUM5IDE1LjYwNDYgOC41NTIyOCAxNiA4IDE2QzcuNDQ3NzIgMTYgNyAxNS42MDQ2IDcgMTQuNUM3IDEzLjM5NTQgNy40NDc3MiAxMyA4IDEzQzguNTUyMjggMTMgOSAxMy4zOTU0IDkgMTQuNVoiIGZpbGw9IiM0NTJBN0EiLz4KPHBhdGggZD0iTTE4IDE0LjVDMTggMTUuNjA0NiAxNy41NTIzIDE2IDE3IDE2QzE2LjQ0NzcgMTYgMTYgMTUuNjA0NiAxNiAxNC41QzE2IDEzLjM5NTQgMTYuNDQ3NyAxMyAxNyAxM0MxNy41NTIzIDEzIDE4IDEzLjM5NTQgMTggMTQuNVoiIGZpbGw9IiM0NTJBN0EiLz4KPC9nPgo8ZGVmcz4KPGZpbHRlciBpZD0iZmlsdGVyMF9kIj4KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiLz4KPGZlT2Zmc2V0IGR5PSIxIi8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEiLz4KPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuNSAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93Ii8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iZWZmZWN0MV9kcm9wU2hhZG93IiByZXN1bHQ9InNoYXBlIi8+CjwvZmlsdGVyPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfYnVubnloZWFkX21haW4iIHgxPSIxNCIgeTE9IjEiIHgyPSIxNCIgeTI9IjI1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM1M0RFRTkiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMUZDN0Q0Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg=="`

const getBaseThumbStyles = ({ isMax, disabled }: StyledInputProps) => `
  -webkit-appearance: none;
  background-image: url(${zodiacSunMax});
  background-color: transparent;
  box-shadow: none;
  border: 0;
  cursor: ${getCursorStyle};
  width: 32px;
  height: 32px;
  margin-top: 17px;
  margin-left: -3px;
  filter: ${disabled ? "grayscale(100%)" : "none"};
  transform: translate(-2px, -2px);
  transition: 200ms transform;
  &:hover {
    transform: ${disabled ? "scale(1) translate(-2px, -2px)" : "scale(1.1) translate(-3px, -3px)"};
  }
`;

export const SliderLabelContainer = styled.div`
  bottom: 0;
  position: absolute;
  left: 14px;
  width: calc(100% - 30px);
`;

export const SliderLabel = styled(Text)<SliderLabelProps>`
  bottom: 0;
  font-size: 12px;
  left: ${({ progress }) => progress};
  position: absolute;
  text-align: center;
  min-width: 24px; // Slider thumb size
`;


export const ZodiacSlider = styled.div`
  position: absolute;
  left: 14px;
  width: calc(100% - 14px);
`;

export const StyledInput = styled.input<StyledInputProps>`
  cursor: ${getCursorStyle};
  height: 32px;
  position: relative;
  ::-webkit-slider-thumb {
    ${getBaseThumbStyles}
  }
  ::-moz-range-thumb {
    ${getBaseThumbStyles}
  }
  ::-ms-thumb {
    ${getBaseThumbStyles}
  }
`;

export const BarBackground = styled.div<DisabledProp>`
  background-color: ${({ theme, disabled }) => theme.colors[disabled ? "textDisabled" : "inputSecondary"]};
  height: 2px;
  position: absolute;
  top: 18px;
  width: 100%;
`;

export const BarProgress = styled.div<DisabledProp>`
  background-color: ${({ theme }) => theme.colors.primary};
  filter: ${({ disabled }) => (disabled ? "grayscale(100%)" : "none")};
  height: 10px;
  position: absolute;
  top: 18px;
`;
