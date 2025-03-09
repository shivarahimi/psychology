"use client";
import { storageTypeEnum } from "@/core/enums/storage-type.enum";
import { clearAllCookies } from "@/core/services/common/cookies.service";
import { clearStorage } from "@/core/services/common/storage.service";
// base
import { FC, useEffect } from "react";

interface IPropType {}

const LogoutContainer: FC<IPropType> = () => {
  useEffect(() => {
    clearStorage(storageTypeEnum.localStorage);
    clearStorage(storageTypeEnum.sessionStorage);
    clearAllCookies();
    window.location.href = "/";
  }, []);
  return <>loading ...</>;
};

export { LogoutContainer };
