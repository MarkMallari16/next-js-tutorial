"use client"

import { REGEXP_ONLY_DIGITS } from "input-otp";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp"

interface OtpInputProps {
    length?: number;
    className?: string;
}

const OtpInput = ({ length = 5, className }: OtpInputProps) => {
    return (
        <InputOTP maxLength={5} pattern={REGEXP_ONLY_DIGITS} className="text-black">
            <InputOTPGroup>
                {
                    Array.from({ length }).map((_, index) => (
                        <InputOTPSlot key={index} index={index} />
                    ))
                }
            </InputOTPGroup>
        </InputOTP>
    )
}

export default OtpInput