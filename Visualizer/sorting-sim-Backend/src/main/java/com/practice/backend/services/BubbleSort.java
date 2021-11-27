package com.practice.backend.services;

import java.util.ArrayList;
import java.util.List;

import com.practice.backend.arraydata.SArray;

public class BubbleSort {
    public static List<SArray> sort(Integer a[]){
    	List<SArray> list=new ArrayList();
        int n=a.length;
        int last=n;
        boolean sorted;
        for(int i=0;i<n-1;i++){
            sorted=true;
            for(int j=0;j<n-i-1;j++){
                if(a[j]>a[j+1]){
                    list.add(new SArray(j,j+1,true,false));
                    Integer temp=a[j+1];
                    a[j+1]=a[j];
                    a[j]=temp;
                    sorted=false;
                }
                else
                	list.add(new SArray(j,j+1,false,false));
            }
            list.add(new SArray(-1,--last,false,false));
            if(sorted==true)
                break;
        }
        for(int i=0;i<n;i++)
        System.out.print(a[i]+" ");
        return list;
    }
}

