for _ in range(int(input())):
    m, n = map(int, input().split())
    arr = list(map(int, input().split()))
    arrm = list(map(int, input().split()))
    arrm.sort()
    arr.sort()

    sum = 0
    for j in range(len(arrm) - 1, -1, -1):
        if len(arrm)-j > len(arr):
            break
        sum += arrm[j]
    for i in arr[len(arrm):]:
        sum += i
    print(sum)
