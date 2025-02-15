class Solution {
public:
    vector<vector<int>> combine(int n, int k) {
        int x = 1;
        vector<int> nums;
        for( int x = 1; x <= n; x++ ){
            nums.push_back( x );
        }
        vector<vector<int>> allRows;
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
            if( ints.size() == k ){
                allRows.push_back(ints);
            }
        }
        return allRows;
    };
};
