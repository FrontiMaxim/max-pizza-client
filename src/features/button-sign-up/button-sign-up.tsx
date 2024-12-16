import { Button, Modal, ModalHandle } from "../../shared/ui";
import IconUser from "../../assets/icons/user.svg?react";
import { useRef, useState } from "react";
import { FormRegistration } from "../../widgets";

export const ButtonSignUp = () => {
  const refModal = useRef<ModalHandle>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <>
      <Button
        variant="default"
        startIcon={IconUser}
        onClick={() => refModal.current?.openModal()}
      >
        Войти
      </Button>

      <Modal ref={refModal}>
        {!isSuccess ? (
          <FormRegistration onSubmit={() => setIsSuccess(true)} />
        ) : (
          <div className="bg-white px-4 py-5 rounded-[18px] shadow-st flex flex-col justify-center items-center gap-5">
            <span className="font-bold text-[20px]">
              🍕 На ваш email отправлено письмо для завершения регистрации 🍕
            </span>
            <Button
              onClick={() => {
                refModal.current?.closeModal();
                setIsSuccess(false);
              }}
            >
              Вернуться на главную
            </Button>
          </div>
        )}
      </Modal>
    </>
  );
};
