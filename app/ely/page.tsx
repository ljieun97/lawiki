"use client"

import { title } from "@/components/primitives";

import React from "react";
import { CheckboxGroup, Checkbox, Card, CardHeader, CardBody, CardFooter, cn, Chip } from "@nextui-org/react";

export default function ElyPage() {
  const [selected, setSelected] = React.useState([
    // "a2", "a3",
    // "b2", "b3", "b4", "b6",
    // "c1",
    // "d1", 
    // "f1", "f2", "f3", "f4", "f5",
    // "e1", "e2"
  ])
  const [total, setTotal] = React.useState(0) //815

  const dlftlrycpList = [
    { id: "a4", name: "영웅왕의 망토", supply: "경매장 구매(추천) 또는 직작", desc: "아무 옵션 10레벨 달려있으면 프리미엄샵에서 엘획 64% 이상(최대 66%) 뜰 때까지 옵션 재분배 돌리기 - 경매장 구매 또는 별의 요람 파밍 ", color: "warning", percent: 64 },
    { id: "a3", name: "초보자의 스타킹", supply: "아르카디아 장진 또는 이벤트 보상", desc: "아이템 기본 효과, 파괴했다면 이벤트할 때 얻기", color: "warning", percent: 20 },
    { id: "a5", name: "악세사리 x3", supply: "경매장 구매 또는 직작", desc: "1)경매장에서 엘획 20작 190% 이상(최대 234%) 붙어있는 귀걸이/반지/빈디 구매 2)경매장 또는 파밍으로 인챈트 등급 20인 귀걸이/반지/빈디 수급 - 인챈트로 엘획 10작 2개씩 준비, 11작부터는 1개 터질때까지 번갈아가면서 인챈트하기, 살아남는 아이 사용하면서 20작 완성하면 풀강하기 3)빈디는 임시로 돌연변이 메카프링 잡고 아무 옵션 10레벨 달려있으면 프리미엄샵에서 엘획 뜰 때까지 옵션 재분배 돌리기", color: "danger", percent: 570 },
    { id: "a6", name: "특수장비 x10", supply: "경매장 구매 또는 직작", desc: "악세사리와 마찬가지로 경매장 구매 또는 31% 이상(최대 51%) 직작 - 5번배지만 예외로 세계수에서 나오는 원숭이 배지로 12작 11% 이상(최대 14%) 인챈트 후 강화", color: "danger", percent: 290 }, //최대 463
    { id: "a1", name: "메인 펫 양양이 효과", supply: "한정판매 또는 경매장 구매 - 로얄상자에서 풀릴 때 경매장 구매 추천", desc: "양양이(100) 없으면 임시로 쁘띠 레이레이(70) 장착", color: "danger", percent: 100 },
    { id: "a7", name: "메인 펫 포함 잠재력 각성 x15", desc: "영구제 펫 총 15개 장착 - 스페셜 각성제 또는 이벤트 각성제로 잠재력 엘획 22% 이상(최대 49% x15) 띄우기, 없으면 임시로 A등급 장착 - 스페셜 각성제 생각보다 많이 뿌림, 없으면 이벤트 각성제 모아뒀다가 각성 이벤트할때 한번에하기", color: "primary", percent: 330 }, //735
    { id: "a2", name: "임시점검 타이틀", supply: "정기정검 보상", desc: "캐시샵에서 상위 타이틀(50) 팔지만 굳이 필요없음", color: "primary", percent: 20 },
  ]

  const dlftlehvldList = [
    { id: "b1", name: "길드 유물 버프 (2시간)", supply: "길드룸에서 길드 무기 교환", desc: "장착 시 스킬창에 버프 스킬 생김 - 매주 길드보상 받으면서 꾸준히 강화하기", color: "primary", percent: 50 },
    { id: "b2", name: "결혼 버프 (1시간)", supply: "엘리아스 공항 - 결혼식장", desc: "Y단축키에 웨이포인트 저장해놨다가 결혼 채널뜨면 바로 이동해서 버프받기", color: "warning", percent: 100 },
    { id: "b3", name: "유틸리티의 영약 (1시간)", supply: "영약교환권으로 교환", color: "warning", percent: 30 },
    { id: "b4", name: "리치링 소환 (20분)", desc: "소환수 길들이기(100) / 스킬 강화(220) / 특성(50)", color: "primary", percent: 370 }, 
    { id: "b5", name: "골드 스플러지 3 스킬 (10분)", supply: "경매장 구매", color: "danger", percent: 50 },
    { id: "b6", name: "엘리 획득의 정수 (5분)", supply: "각종 평판 NPC에게서 교환", desc: "평판템 다 썼다면 엘리아스 왕궁에서 세계수 퀘스트 하면서 수급하기", color: "warning", percent: 100 },
  ]

  const tkdtlList = [
    { id: "c1", name: "참", supply: "경매장 구매 및 파밍(추천)", desc: "수르트의 참(60) 없으면 임시로 카이로스의 참(50)/미카엘라의 참(50)/학원장의 참(49)/파라오의 참(40)/나비모양의그림자 참(30) 장착", color: "warning", percent: 60 },
    { id: "c2", name: "아가슈라의 4번젬 x3", supply: "여유있을 때 경매장 92% 이상(최대 106%) 구매", desc: "엘획만 있는거 구매했다면 수시로 교체하면되고 스펙+엘던용이면 항상끼면됨", color: "danger", percent: 276 }, //최대 318
  ]

  const petList = [
    { id: "d1", name: "A타입", supply: "애완동물 교환권으로 교환", desc: "그레이토!마리", color: "warning", percent: 70 },
    { id: "d2", name: "B타입", supply: "이벤트 보상", desc: "그래쥬얼", color: "primary", percent: 85 },
    { id: "d3", name: "C타입", supply: "한정판매 또는 경매장 구매 - 로얄상자에서 풀릴 때 경매장 구매 추천", desc: "쇼콜라(150) 없으면 임시로 쥐돌이(85) 장착", color: "danger", percent: 150 }, 
  ]

  const rPwjdList = [
    { id: "f1", name: "지엔디아 평판 7레벨", supply: "엘리아스 왕궁의 레비", desc: "정수와 마찬가지로 평판템 다 썼으면 세계수돌아서 올리기", color: "warning", percent: 30 },
    { id: "f2", name: "아이템 도감", supply: "엘리아스 이그나트에게 등록", desc: "190층의비밀상권(7) - 몬스터타워 190층 드랍 / 초콜릿방패-프리링정원 NPC 교환(5) / 황금망치(3) - 벨로스 로한 구매 / 지능의핵파편(2) - 버섯의숲 세루스 드랍 / 돌연변이스펙터의옷깃(2) - 오라라의숲 돌연변이스펙터 드랍 / 별드워프학자인형(1) - 별드워프창고 별드워프학자 드랍", color: "warning", percent: 20 },
    { id: "f3", name: "타이틀 도감", desc: "도트누리가가장쉬웠어요(20) - 도트누리 1-2 5회완료 / 갓오브더도트누리(10) - 도트누리 타이틀 모두 획득 / VVIP(10) - 이벤트로 뿌리는 지름 타이틀 4개 습득 후 프리미엄샵 샬로에게 습득 / 전설의4대명검(5) - 점검 타이틀 모두 습득", color: "danger", percent: 45 },
    { id: "f4", name: "어드벤처 (7일)", supply: "스테이지 22 도달", desc: "다음 점검 후부터 효과 적용", color: "warning", percent: 50 },
    { id: "f5", name: "별 각인 (30일)", supply: "하급엘던에서 수급 및 경매장 구매", desc: "75% 이상(최대 80%) 나올 때까지 돌리기", color: "warning", percent: 75 },
    { id: "f6", name: "텐구의 기운이 서린 토템", supply: "벨로스 로한에게 구매 또는 시나리오 퀘스트 보상(귀찬)으로 수급", desc: "토템 재료 모이면 로한한테 황금망치 사서 바로바로 강화하기", color: "primary", percent: 100 },
  ]

  const zoflrList = [
    { id: "e1", name: "NO.1", supply: "235렙 달성 후 엘리아스 왕궁 혜종에게 받는 패시브 스킬", color: "warning", percent: 35 },
    { id: "e2", name: "길드", supply: "25레벨 이상 길드 가입 추천, 최소 20레벨", color: "warning", percent: 50 },
    { id: "e3", name: "룬워드", supply: "경매장 또는 벨로스 로한에게 구매", desc: "초월 2000레벨 달성 후 룬워드 스크롤 사용하기 - (풍요/축복&풍요) 엘던 캐릭이라면 일단 둘다 띄워야하고 하나는 마지막에 나와서 2배되어야함 - 이벤트 룬워드 스크롤 사용하지 말고 쟁여놓기", color: "danger", percent: 150 }, 
    { id: "e4", name: "직업", supply: "윈드스토커 패시브 스킬", color: "warning", percent: 210 },
  ]

  const changeCheckbox = (value: any) => {
    setSelected(value)
  }

  const changeTotal = (value: any, num: number) => {
    if (value) setTotal(total + num)
    else setTotal(total - num)
  }

  const checkboxString = (item: any) => {
    return (
      <Card className={`w-[480px] sm:w-[560px] border-2  border-${item.color}`}>
        <CardHeader className="justify-between gap-3">
          <div className="flex gap-5">
            <div className="flex flex-col gap-1 items-start justify-center">
              <h4 className="text-small font-semibold leading-none text-default-600">{item.name}</h4>
              <h5 className="text-small text-left tracking-tight text-default-400">{item.supply}</h5>
            </div>
          </div>
          <div>{item.percent}%</div>
        </CardHeader>
        <CardBody className="p-3 text-small text-default-400">
          <p>
            {item.desc}
          </p>
        </CardBody>
        {/* <CardFooter className="gap-3">
          <div className="flex gap-1">
          <p className=" text-default-400 text-small">최소</p>
            <p className="font-semibold text-default-400 text-small">4</p>
          </div>
          <div className="flex gap-1">
          <p className="text-default-400 text-small">최대</p>
            <p className="font-semibold text-default-400 text-small">97.1K</p>
          </div>
        </CardFooter> */}
      </Card>
    )
  }

  return (
    <div>
      <h1 className={title({ color: "yellow" })}>2024 엘획 세팅</h1>
      <div className="flex gap-4 justify-center py-2">
        <Chip color="warning" variant="bordered">쉬운거 914%</Chip>
        <Chip color="primary" variant="bordered">꾸준히 하면 되는거 955%</Chip>
        <Chip color="danger" variant="bordered">비싼거 1631%</Chip>
      </div>
      <div className="pb-8">{total} / 3500 %</div>
      <div className="flex flex-col gap-10">
        <CheckboxGroup
          label={<>일시 교체</>}
          color="warning"
          value={selected}
          onValueChange={(value) => changeCheckbox(value)}
        >
          {dlftlrycpList.map((item: any) => (
            <Checkbox
              key={item.id}
              value={item.id}
              onValueChange={(value) => changeTotal(value, item.percent)}
            // classNames={{
            //   base: cn(
            //     "inline-flex max-w-md w-full bg-content1 m-0",
            //     "hover:bg-content2 items-center justify-start",
            //     "cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent",
            //     "data-[selected=true]:border-primary"
            //   ),
            // }}
            >
              {checkboxString(item)}
            </Checkbox>
          ))}
        </CheckboxGroup>
        <CheckboxGroup
          label={<>일시 도핑</>}
          color="warning"
          value={selected}
          onValueChange={(value) => changeCheckbox(value)}
        >
          {dlftlehvldList.map((item: any) => (
            <Checkbox key={item.id} value={item.id} onValueChange={(value) => changeTotal(value, item.percent)}>{checkboxString(item)}</Checkbox>
          ))}
        </CheckboxGroup>
        <CheckboxGroup
          label={<>상시 효과</>}
          color="warning"
          value={selected}
          onValueChange={(value) => changeCheckbox(value)}
        >
          {tkdtlList.map((item: any) => (
            <Checkbox key={item.id} value={item.id} onValueChange={(value) => changeTotal(value, item.percent)}>{checkboxString(item)}</Checkbox>
          ))}
        </CheckboxGroup>
        <CheckboxGroup
          label={<>애완동물</>}
          color="warning"
          value={selected}
          onValueChange={(value) => changeCheckbox(value)}
        >
          {petList.map((item: any) => (
            <Checkbox key={item.id} value={item.id} onValueChange={(value) => changeTotal(value, item.percent)}>{checkboxString(item)}</Checkbox>
          ))}
        </CheckboxGroup>
        <CheckboxGroup
          label={<>계정 전용</>}
          color="warning"
          value={selected}
          onValueChange={(value) => changeCheckbox(value)}
        >
          {rPwjdList.map((item: any) => (
            <Checkbox key={item.id} value={item.id} onValueChange={(value) => changeTotal(value, item.percent)}>{checkboxString(item)}</Checkbox>
          ))}
        </CheckboxGroup>
        <CheckboxGroup
          label={<>캐릭터 전용</>}
          color="warning"
          value={selected}
          onValueChange={(value) => changeCheckbox(value)}
        >
          {zoflrList.map((item: any) => (
            <Checkbox key={item.id} value={item.id} onValueChange={(value) => changeTotal(value, item.percent)}>{checkboxString(item)}</Checkbox>
          ))}
        </CheckboxGroup>
      </div>
    </div>
  );
}
