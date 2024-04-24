import React from "react";

export default function About() {
  return (
    <div className="container mx-auto px-6 py-10 text-white">
      <div className="flex flex-wrap items-center justify-between mb-10">
        {" "}
        <div className="w-full md:w-1/3 p-6">
          {" "}
          <img
            src="/img/banner.jpg"
            alt="배너"
            className="max-w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 p-6">
          {" "}
          <h1 className="text-4xl font-bold mb-4">프롬북을 경험하세요.</h1>
          <div className="mt-6">
            <p>프롬북은 책 속에서 발견한 지혜와 감동을 나누는 공간입니다.</p>
            <p>
              책을 읽으며 마주친, 마음을 움직이는 구절들을 프롬북을 통해
              기록하고 공유해보세요.
            </p>
            <p>
              나에게 닿아 스며든 문장들을 다른 이와 나누며, 책으로부터 파생되는
              모든 것들을 경험할 수 있는 플랫폼입니다.
            </p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-3xl font-bold my-6 text-center">
          프롬북에서 시작하는 새로운 독서 여정
        </h2>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 p-6">
            <img
              src="/img/about_1.jpg"
              alt="문장 소환"
              className="rounded-lg shadow-lg"
            />
            <h3 className="text-xl font-semibold my-3">문장 소환</h3>
            <p>
              마음을 사로잡은 구절을 발견할 때마다, 프롬북에 기록하고 소중한
              발견을 모두와 공유하세요.
            </p>
          </div>
          <div className="w-full md:w-1/3 p-6">
            <img
              src="/img/about_2.jpg"
              alt="책의 발견"
              className="rounded-lg shadow-lg"
            />
            <h3 className="text-xl font-semibold my-3">책의 발견</h3>
            <p>
              깊은 지식의 바다에서 다음 읽을 책을 찾아보세요. 새로운 발견이
              여러분을 기다립니다.
            </p>
          </div>
          <div className="w-full md:w-1/3 p-6">
            <img
              src="/img/about_3.jpg"
              alt="감상 나눔"
              className="rounded-lg shadow-lg"
            />
            <h3 className="text-xl font-semibold my-3">감상 나눔</h3>
            <p>
              읽은 책에 대한 생각과 느낌을 남기고, 다른 독자들과 의견을
              교환해보세요.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <p>
          프롬북은 독서가 더 이상 혼자하는 활동이 아니라, 서로의 경험을 공유하며
          소통할 수 있는 공간을 제공합니다. 여러분이 경험한 책 속의 세계를
          넓히고 싶다면, 프롬북과 함께하세요.
        </p>
        <p className="mt-4">
          프롬북은 끊임없이 발전하고 혁신을 추구합니다. 책은 우리에게 무한한
          세계를 열어주는 창문과 같고, 프롬북은 그 창문을 통해 새롭게 발견된
          지평을 탐험할 수 있게 돕습니다. 새로운 기능과 업데이트로 당신의 독서
          여정을 더욱 풍부하게 만들어 나가는 것이 우리의 목표입니다. 책의 무한한
          공간 속에서 프롬북과 함께 미래를 펼쳐 보세요!
        </p>
      </div>
    </div>
  );
}
