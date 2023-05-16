#include <iostream>
#include <bits/stdc++.h>
// using namespace std;

int minimumPlanesRequired(std::vector<int> &fuel)
{
    int n = fuel.size();
    int planes = 0;
    int currFuel = fuel[0];
    int maxReach = fuel[0];

    for (int i = 1; i < n; i++)
    {
        // If we can't reach the current airport
        if (currFuel < i)
        {
            // If there is no more reachable airport
            if (maxReach < i)
            {
                return -1;
            }
            // Hire a plane and update the current fuel
            planes++;
            currFuel = maxReach;
        }

        // Update the maximum reachable index
        maxReach = std::max(maxReach, i + fuel[i]);
    }

    return planes;
}

int main()
{
    int n;
    // std::cout << "Enter the number of airports: ";
    std::cin >> n;

    std::vector<int> fuel(n);
    // std::cout << "Enter the units of fuel at each airport: ";
    for (int i = 0; i < n; i++)
    {
        std::cin >> fuel[i];
    }

    int result = minimumPlanesRequired(fuel);
    std::cout << result << std::endl;

    return 0;
}
