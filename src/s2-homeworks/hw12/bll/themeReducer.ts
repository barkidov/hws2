const initState = {
    themeId: 1,
}

export type ThemeType = {
    themeId: number
}

export const themeReducer = (state = initState, action: ChangeThemeAction): ThemeType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID': 
        return {...state, themeId: action.id}
        default:
            return state
    }
}

export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id } as const)// fix any

type ChangeThemeAction = ReturnType<typeof changeThemeId>

