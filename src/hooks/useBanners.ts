/* eslint-disable react-hooks/exhaustive-deps */
import { useSnackbar } from "notistack";
import { useCallback, useEffect, useState } from "react";

export const useBanners = (dataBanners) => {
  const [banners, setBanners] = useState<any>([]);

  const fetchBanners = useCallback(async () => {
    await dataBanners
      .then((response) => setBanners(response))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetchBanners();
  }, [fetchBanners]);

  return { banners, setBanners };
};
