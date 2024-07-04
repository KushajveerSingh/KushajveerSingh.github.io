P = 1000000007

def mul_matrix(A, B):
    # A = m x n, B = n x k
    # out = m x k
    M = len(A)
    N = len(A[0])
    K = len(B[0])

    out = [[0 for _ in range(M)] for _ in range(K)]
    for i in range(M):
        for j in range(K):
            val = 0
            for k in range(N):
                val += (A[i][k] * B[k][j]) % P

            out[i][j] = val % P

    return out

def get_identify(M):
    I = [[0 for _ in range(M)] for _ in range(M)]
    for i in range(M):
        I[i][i] = 1

    return I

def power(A, N):
    A_rows = len(A)

    if N == 0:
        return get_identify(A_rows)
    if N == 1:
        return A

    temp = power(A, N // 2)

    result = mul_matrix(temp, temp)
    if N % 2 == 1:
        result = mul_matrix(A, result)

    return result

T = int(input())
for _ in range(T):
    M, N = [int(x) for x in input().split()]

    A = []
    for i in range(M):
        nums = [int(x) for x in input().split()]
        A.append(nums)

    out = power(A, N)

    print(out)
