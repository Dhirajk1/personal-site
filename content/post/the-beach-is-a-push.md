+++
date = "2021-08-09"
title = "Cute Probability Problem"
headline = "A small brainteaser"
slug = "the-beach-is-a-push"
categories = [ "probability", "python" ]
tags = [ "Problem", "Statistics", "Probability", "Python" , "Math"]
katex = true
+++

> Probability problem for the nerds for today, what is the probability that two whole numbers from 1 to 1000 chosen at random are divisible without remainder (as in a/b=whole number but not necessarily b/a= whole number)

So we know that there are 1000 possibilities for the first number, and another 1000 for the second number. Given this we know that the size of the sample space space is 1000^2. Let's also define *a* as the first number and *b* as the second number. The problem is essentially asking us to find how many possibilities for *b* there are in [1, 1000] where *b* is a multiple of *a*. This is as simple enough as finding how many factors of *a* are in the range [1, 1000] which is simply the floor of 1000 divided by that number. We sum up all these possibilities and then divide by the sample space to get our answer

$$
\frac{\sum_{n=1}^{1000}\limits{\lfloor \frac{1000}{n} \rfloor}}{1000^2}
$$

We can write Python code as follows:

```python
successes = sum(1000 // a for a in range(1,1001))
possibilities = 1000 ** 2
prob = successes / possibilities
```

And find that the probability is: ***0.007069***
