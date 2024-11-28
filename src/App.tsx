import { ButtonMobile } from "@alfalab/core-components/button/mobile";

import { Typography } from "@alfalab/core-components/typography";

import image from "./assets/image.png";
import image1 from "./assets/image1.png";
import image2 from "./assets/image2.png";
import image3 from "./assets/image3.png";
import image4 from "./assets/image4.png";
import check from "./assets/check.png";
import nerd from "./assets/nerd.png";

import { LS, LSKeys } from "./ls";
import { appSt } from "./style.css";
import { ThxLayout } from "./thx/ThxLayout";
import { Gap } from "@alfalab/core-components/gap";
import { useState } from "react";
import { StatusBadge } from "@alfalab/core-components/status-badge";
import { ProgressBar } from "@alfalab/core-components/progress-bar";
import { sendMainGoalDataToGA, sendPlanNameDataToGA } from "./utils/events.ts";

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [thxShow, setThx] = useState(LS.getItem(LSKeys.ShowThx, false));
  const [progressValue, setProgressValue] = useState(25);
  const [step, setStep] = useState(1);
  const [goal, setGoal] = useState("");
  const [plan, setPlan] = useState("");

  const submitPlanName = (goal: string, plan: string) => {
    setLoading(true);

    sendPlanNameDataToGA({ main_goal: goal, plan_name: plan }).then(() => {
      LS.setItem(LSKeys.ShowThx, true);
      setThx(true);
      setLoading(false);
    });
  };

  const submitMainGoal = (goal: string) => {
    setGoal(goal);
    setLoading(true);

    sendMainGoalDataToGA({ main_goal: goal }).then(() => {
      setLoading(false);
      setStep(3);
      setProgressValue(100);
    });
  };

  const clickStart = () => {
    window.gtag("event", "neiro_3_start_click");
  };

  if (thxShow) {
    return <ThxLayout />;
  }

  return (
    <>
      <div className={appSt.container}>
        <Gap size={12} />
        <ProgressBar view="negative" size={8} value={progressValue} />

        {step === 1 && (
          <>
            <div className={appSt.box}>
              <Gap size={32} />
              <img src={image} alt="" className={appSt.face} />
              <Gap size={32} />
              <Typography.TitleResponsive
                font="system"
                tag="h1"
                view="medium"
                weight="semibold"
                style={{ marginBottom: "1rem" }}
              >
                Привет, я Нейросоветник!
              </Typography.TitleResponsive>
              <Typography.Text
                tag="p"
                view="primary-medium"
                color="secondary"
                style={{ marginBottom: 0 }}
              >
                Построю вашу персональную финансовую стратегию, расскажу о
                банковских продуктах, помогу достичь поставленные цели и отвечу
                на любой вопрос
              </Typography.Text>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <div className={appSt.box}>
              <Gap size={64} />
              <Typography.TitleResponsive
                font="system"
                tag="h1"
                view="medium"
                weight="semibold"
                style={{ marginBottom: "1rem" }}
              >
                Какая у тебя главная цель?
              </Typography.TitleResponsive>
              <Gap size={16} />
              <ButtonMobile
                loading={!!goal && goal === "Составить финансовый план"}
                disabled={!!goal && goal !== "Составить финансовый план"}
                block
                view="primary"
                onClick={() => {
                  submitMainGoal("Составить финансовый план");
                }}
              >
                Составить финансовый план
              </ButtonMobile>
              <Gap size={12} />
              <ButtonMobile
                loading={!!goal && goal === "Узнать о банковских продуктах"}
                disabled={!!goal && goal !== "Узнать о банковских продуктах"}
                block
                view="primary"
                onClick={() => {
                  submitMainGoal("Узнать о банковских продуктах");
                }}
              >
                Узнать о банковских продуктах
              </ButtonMobile>
              <Gap size={12} />
              <ButtonMobile
                loading={!!goal && goal === "Выгоднее использовать кэшбэк"}
                disabled={!!goal && goal !== "Выгоднее использовать кэшбэк"}
                block
                view="primary"
                onClick={() => {
                  submitMainGoal("Выгоднее использовать кэшбэк");
                }}
              >
                Выгоднее использовать кэшбэк
              </ButtonMobile>
              <Gap size={12} />
              <ButtonMobile
                loading={!!goal && goal === "Задать вопрос"}
                disabled={!!goal && goal !== "Задать вопрос"}
                block
                view="primary"
                onClick={() => {
                  submitMainGoal("Задать вопрос");
                }}
              >
                Задать вопрос
              </ButtonMobile>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <div className={appSt.box}>
              <Gap size={32} />
              <img src={check} alt="" className={appSt.face} />
              <Gap size={32} />
              <Typography.TitleResponsive
                font="system"
                tag="h1"
                view="medium"
                weight="semibold"
              >
                Всё готово
              </Typography.TitleResponsive>
              <Typography.Text
                tag="p"
                view="primary-medium"
                color="secondary"
                style={{ marginBottom: 0 }}
              >
                Выбери тариф и получи полный доступ к персональному плану
              </Typography.Text>
            </div>

            <Gap size={32} />

            <Typography.TitleResponsive
              font="system"
              tag="h3"
              view="small"
              weight="semibold"
              className={appSt.productsTitle}
            >
              Что внутри
            </Typography.TitleResponsive>

            <Gap size={16} />

            <div className={appSt.benefits}>
              <div className={appSt.benefit}>
                <img
                  src={image1}
                  alt=""
                  width={50}
                  height={50}
                  style={{ objectFit: "cover" }}
                />
                <Typography.Text
                  tag="p"
                  view="primary-small"
                  weight="bold"
                  style={{ marginBottom: 0 }}
                >
                  Умный анализ
                </Typography.Text>
                <Typography.Text tag="p" view="primary-small">
                  AI поможет в оптимизации твоих трат
                </Typography.Text>
              </div>
              <div className={appSt.benefit}>
                <img
                  src={image2}
                  alt=""
                  width={50}
                  height={50}
                  style={{ objectFit: "cover" }}
                />
                <Typography.Text
                  tag="p"
                  view="primary-small"
                  weight="bold"
                  style={{ marginBottom: 0 }}
                >
                  Личный план
                </Typography.Text>
                <Typography.Text tag="p" view="primary-small">
                  Создаем финансовый план с учетом твоих целей
                </Typography.Text>
              </div>
              <div className={appSt.benefit}>
                <img
                  src={image3}
                  alt=""
                  width={50}
                  height={50}
                  style={{ objectFit: "cover" }}
                />
                <Typography.Text
                  tag="p"
                  view="primary-small"
                  weight="bold"
                  style={{ marginBottom: 0 }}
                >
                  Советник
                </Typography.Text>
                <Typography.Text tag="p" view="primary-small">
                  Персональные рекомендации каждую неделю
                </Typography.Text>
              </div>
              <div className={appSt.benefit}>
                <img
                  src={image4}
                  alt=""
                  width={50}
                  height={50}
                  style={{ objectFit: "cover" }}
                />
                <Typography.Text
                  tag="p"
                  view="primary-small"
                  weight="bold"
                  style={{ marginBottom: 0 }}
                >
                  Цели и успех
                </Typography.Text>
                <Typography.Text tag="p" view="primary-small">
                  Отслеживай прогресс и празднуй победы
                </Typography.Text>
              </div>
            </div>

            <Gap size={32} />

            <Typography.TitleResponsive
              font="system"
              tag="h3"
              view="small"
              weight="semibold"
              className={appSt.productsTitle}
            >
              Выберите план
            </Typography.TitleResponsive>

            <Gap size={16} />

            <div className={appSt.plans}>
              <div
                className={appSt.plan}
                onClick={() => setPlan("1 неделя – 29 руб./нед")}
              >
                <div>
                  {plan !== "1 неделя – 29 руб./нед" && (
                    <div className={appSt.statusEmpty}></div>
                  )}
                  {plan === "1 неделя – 29 руб./нед" && (
                    <StatusBadge view="positive-checkmark" size={24} />
                  )}
                </div>
                <Typography.Text
                  tag="p"
                  view="primary-medium"
                  weight="bold"
                  style={{ marginBottom: 0, flexGrow: 1 }}
                >
                  1 неделя
                </Typography.Text>
                <Typography.Text
                  tag="p"
                  view="primary-medium"
                  weight="bold"
                  style={{ marginBottom: 0 }}
                >
                  29 руб./нед.
                </Typography.Text>
              </div>
              <div
                className={appSt.plan}
                onClick={() => setPlan("1 месяц – 25 руб./нед")}
              >
                <div>
                  {plan !== "1 месяц – 25 руб./нед" && (
                    <div className={appSt.statusEmpty}></div>
                  )}
                  {plan === "1 месяц – 25 руб./нед" && (
                    <StatusBadge view="positive-checkmark" size={24} />
                  )}
                </div>
                <div style={{ flexGrow: 1 }}>
                  <Typography.Text
                    tag="p"
                    view="primary-medium"
                    weight="bold"
                    style={{ marginBottom: "0.5rem" }}
                  >
                    1 месяц
                  </Typography.Text>
                  <Typography.Text
                    tag="p"
                    view="secondary-medium"
                    style={{ marginBottom: 0 }}
                    color="secondary"
                  >
                    100 руб.
                  </Typography.Text>
                </div>
                <Typography.Text
                  tag="p"
                  view="primary-medium"
                  weight="bold"
                  style={{ marginBottom: 0 }}
                >
                  25 руб./нед.
                </Typography.Text>
              </div>
              <div
                className={appSt.plan}
                onClick={() => setPlan("3 месяца – 21 руб./нед")}
              >
                <div>
                  {plan !== "3 месяца – 21 руб./нед" && (
                    <div className={appSt.statusEmpty}></div>
                  )}
                  {plan === "3 месяца – 21 руб./нед" && (
                    <StatusBadge view="positive-checkmark" size={24} />
                  )}
                </div>
                <div style={{ flexGrow: 1 }}>
                  <Typography.Text
                    tag="p"
                    view="primary-medium"
                    weight="bold"
                    style={{ marginBottom: "0.5rem" }}
                  >
                    3 месяца
                  </Typography.Text>
                  <Typography.Text
                    tag="p"
                    view="secondary-medium"
                    style={{ marginBottom: 0 }}
                    color="secondary"
                  >
                    249 руб.
                  </Typography.Text>
                </div>
                <Typography.Text
                  tag="p"
                  view="primary-medium"
                  weight="bold"
                  style={{ marginBottom: 0 }}
                >
                  21 руб./нед.
                </Typography.Text>
              </div>
              <div
                className={appSt.plan}
                onClick={() => setPlan("6 месяцев – 19 руб./нед")}
              >
                <div>
                  {plan !== "6 месяцев – 19 руб./нед" && (
                    <div className={appSt.statusEmpty}></div>
                  )}
                  {plan === "6 месяцев – 19 руб./нед" && (
                    <StatusBadge view="positive-checkmark" size={24} />
                  )}
                </div>
                <div style={{ flexGrow: 1 }}>
                  <Typography.Text
                    tag="p"
                    view="primary-medium"
                    weight="bold"
                    style={{ marginBottom: "0.5rem" }}
                  >
                    6 месяцев
                  </Typography.Text>
                  <Typography.Text
                    tag="p"
                    view="secondary-medium"
                    color="secondary"
                    style={{ marginBottom: 0 }}
                  >
                    449 руб.
                  </Typography.Text>
                </div>
                <Typography.Text
                  tag="p"
                  view="primary-medium"
                  weight="bold"
                  style={{ marginBottom: 0 }}
                >
                  19 руб./нед.
                </Typography.Text>
              </div>
            </div>

            <Gap size={16} />

            <div className={appSt.reminder}>
              <img
                src={nerd}
                alt=""
                width={24}
                height={24}
                style={{ marginRight: "0.8rem" }}
              />
              <div>
                <Typography.Text
                  tag="p"
                  view="primary-small"
                  weight="bold"
                  style={{ marginBottom: "4px" }}
                >
                  Поддержка рядом
                </Typography.Text>
                <Typography.Text
                  tag="p"
                  view="secondary-large"
                  style={{ marginBottom: 0 }}
                >
                  Чтобы ни случилось, вы получите комплексные ответы на любые
                  вопросы
                </Typography.Text>
              </div>
            </div>
          </>
        )}
      </div>

      <Gap size={96} />

      {step === 1 && (
        <div className={appSt.bottomBtnThx}>
          <ButtonMobile
            loading={loading}
            block
            view="primary"
            onClick={() => {
              setStep(2);
              setProgressValue(50);
              clickStart();
            }}
          >
            Начать
          </ButtonMobile>
        </div>
      )}

      {step === 3 && (
        <div className={appSt.bottomBtnThx}>
          <ButtonMobile
            loading={loading}
            block
            disabled={!plan}
            view="primary"
            onClick={() => submitPlanName(goal, plan)}
          >
            Продолжить
          </ButtonMobile>
        </div>
      )}
    </>
  );
};
