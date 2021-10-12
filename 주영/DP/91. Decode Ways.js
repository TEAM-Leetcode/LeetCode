// var numDecodings = function (s) {
//   if (s.length > 0 && s[0] === '0') return 0;
//   if (s.length < 2) return 1;

//   // 만약 두 자리를 확인해야 할 때,
//   // 숫자가 26 이하라면 1
//   if (s[0] === '1' || (s[0] === '2' && parseInt(s[1]) < 7)) {
//     return numDecodings(s.slice(1)) + numDecodings(s.slice(2));
//   }
//   // 그게 아니고 26보다 크거나 한 자리수라면
//   // 어차피 한 자리수는 무조건 1가지이기 때문에
//   // s.slice(1)을 인수로 numDecodings를 재귀적으로 호출

//   // 시간 초과
//   return numDecodings(s.slice(1));
// };

// 다른 사람의 풀이 (DP)
function numDecodings(s) {
  if (s == null || s.length === 0) return 0;
  if (s[0] === '0') return 0;

  const dp = new Array(s.length + 1).fill(0);

  dp[0] = 1;
  dp[1] = 1;

  console.log('dp: ', dp);

  for (let i = 2; i <= s.length; i++) {
    // Single Number
    const a = Number(s.slice(i - 1, i));
    if (a >= 1 && a <= 9) {
      dp[i] += dp[i - 1];
    }
    console.log('dp: ', dp);

    // Double Number
    const b = Number(s.slice(i - 2, i));
    if (b >= 10 && b <= 26) {
      dp[i] += dp[i - 2];
    }
  }

  console.log('dp: ', dp);

  return dp[s.length];
}

// 한 자리수 일 때
//F(n) = F(n) + F(n-1)

// 두 자리수일 때
// F(n) = F(n) + F(n-2)

let s = '28';
dp = [1, 1];

numDecodings(s);
