import { logout } from "../../services/api/AuthApi";
import { useMutation } from "@tanstack/react-query";

export default function useLogout() {

  return useMutation({
    mutationFn: logout
  })

}
