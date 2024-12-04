import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit"

interface UserInfo {
    email: string;
    id: string;
}

interface InitialState {
    user: UserInfo | null;
}

const initialState: InitialState = {
    user: null
}

const Slice = createSlice({
    name: "addUserSlice",
    initialState,
    reducers: {
        signupUpdate: (state) => {
            const uid = state.user?.id
            if (uid) {
            }
        },
    }
}
)

export const { signupUpdate } = Slice.actions
export default Slice.reducer