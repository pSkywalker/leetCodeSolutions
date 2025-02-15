class Solution {
public:
    vector<vector<int>> subsets(vector<int>& nums) {
        //return all_digits( nums.size() , nums );
        vector<vector<int>> allRows;
        //int numSize = nums.size();
        for(int i=0;i<(1<<nums.size());i++)
        {
            vector<int> ints;
            for(int i2=0;i2<nums.size();i2++)
            { 
                if(i&(1<<(nums.size()-i2-1)))
                {
                    ints.push_back( nums.at(i2) );
                }
            }
            allRows.push_back(ints);
        }
        return allRows;
    }

    vector<int> print_digit(int n,int digits, vector<int>& nums )
    {
        vector<int> ints;
        for(int i=0;i<digits;i++)
        { 
            if(n&(1<<(digits-i-1)))
            {
                ints.push_back( nums.at(i) );
            }
        }
        return ints;       
    }
    vector<vector<int>> all_digits(int e, vector<int>& nums )
    {
        vector<vector<int>> allRows;
        for(int i=0;i<(1<<e);i++)
        {
            allRows.push_back(print_digit(i,e, nums));
        }
        return allRows;
    }

};
	
