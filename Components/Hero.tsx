import React from 'react'
import LottieAnimation from '@/Helper/LottieAnimation'
import x from '@/public/lottieFiles/my_hero_icon.json'

const Hero: React.FC = () => {
    return (
        <div>
            <div className={'flex flex-row gap-6'}>
                <div className={'flex flex-col'}>
                    <div className={'flex flex-col'}>
                        <span>Good Evening, stranger</span>
                        <span>Moin Here, I am Software Developer</span>
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Quisque odio lacus, porta nec rhoncus nec,
                            convallis at velit. Sed sagittis iaculis libero, eu
                            hendrerit nunc. Morbi et ligula congue, finibus dui
                            vel, blandit nisl. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Quisque vitae hendrerit
                            est. Vivamus et euismod est. Nulla consectetur, urna
                            ut luctus iaculis, tellus massa mattis neque, eu
                            auctor mauris tortor in felis.
                        </span>
                    </div>
                    <div className={'flex flex-row gap-4'}>
                        <button>Resume</button>
                        <button>Let&apos;s Connect</button>
                    </div>
                </div>
                <div className={'flex '}>
                    <LottieAnimation animationPath={x} width={100} />
                </div>
            </div>
        </div>
    )
}

export default Hero
