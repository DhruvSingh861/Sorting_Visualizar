package com.practice.backend.arraydata;

public class SArray {

	private int index1;
	private int index2;
	private boolean exch;
	private boolean sorted;
	
	public SArray() {
		super();
	}
	
	public SArray(int index1, int index2, boolean exch,boolean sorted) {
		super();
		this.index1 = index1;
		this.index2 = index2;
		this.exch = exch;
		this.sorted=sorted;
	}

	
	public boolean isSorted() {
		return sorted;
	}

	public void setSorted(boolean sorted) {
		this.sorted = sorted;
	}

	public int getIndex1() {
		return index1;
	}

	public void setIndex1(int index1) {
		this.index1 = index1;
	}

	public int getIndex2() {
		return index2;
	}

	public void setIndex2(int index2) {
		this.index2 = index2;
	}

	public boolean isExch() {
		return exch;
	}

	public void setExch(boolean exch) {
		this.exch = exch;
	}

	@Override
	public String toString() {
		return "SArray [index1=" + index1 + ", index2=" + index2 + ", exch=" + exch + "]";
	}
	
	
	
}
