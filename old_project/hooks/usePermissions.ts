import React from "react";

export const usePermissions = (name: PermissionName) => {
    const [result, setResult] = React.useState<PermissionState | null>(null);
    React.useEffect(
        () => {
            navigator.permissions
                .query({ name })
                .then(result => {
                    setResult(result.state);
                });
        },
        [name]
    );
    return result;
};
