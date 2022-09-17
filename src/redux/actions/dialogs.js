import { dialogsApi } from "utils/Api";

const actions = {
  setDialogs: (items) => ({
    type: "DIALOGS:SET_ITEMS",
    payload: items,
  }),
  setCurrentDialog: (id) => ({
    type: "DIALOGS:SET_CURRENT_DIALOG_ID",
    payload: id,
  }),
  setIsLoading: (bool) => ({
    type: "DIALOGS:SET_IS_LOADING",
    payload: bool,
  }),
  fetchDialogs: () => (dispatch) => {
    dispatch(actions.setIsLoading(true));
    dialogsApi.getAll().then(({ data }) => {
      dispatch(actions.setDialogs(data));
      dispatch(actions.setIsLoading(false));
    }).catch(() => {
      dispatch(actions.setIsLoading(false));
    });
    
  },
};

export default actions;
