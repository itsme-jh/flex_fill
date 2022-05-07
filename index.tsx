export const fillDOM = (total: number, line: number, width: string) => {
    // 接收参数  总数，每行个数，每个宽度
    const n = line - (total % line);
    const li = [];
    for (let i = 0; i < n; i++) {
        li.push(<li key={i} style={{ width: width }}></li>);
    }
    return li;
};
