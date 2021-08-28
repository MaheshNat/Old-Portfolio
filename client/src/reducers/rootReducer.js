const initialState = {
  repositories: null,
  projects: null,
  episodes: null,
  resume: null,
  showModals: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_REPOSITORIES':
      return { ...state, repositories: action.repositories };
    case 'LOAD_PROJECTS':
      let showModals = {};
      action.projects.forEach((project) => {
        showModals[project._id] = false;
      });
      return {
        ...state,
        projects: action.projects.sort(
          (a, b) => new Date(a.rank) - new Date(b.rank)
        ),
        showModals: showModals,
      };
    case 'SHOW_MODAL':
      let newShowModals = { ...state.showModals };
      newShowModals[action.id] = true;
      return {
        ...state,
        showModals: newShowModals,
      };
    case 'HIDE_MODAL':
      let _newShowModals = { ...state.showModals };
      _newShowModals[action.id] = false;
      return {
        ...state,
        showModals: _newShowModals,
      };
    case 'LOAD_EPISODES':
      return { ...state, episodes: action.episodes };
    case 'LOAD_RESUME':
      return { ...state, resume: action.resume };
    default:
      return state;
  }
};
