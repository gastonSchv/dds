package proyecto;

import static org.junit.Assert.*;

import org.junit.Test;

public class TestDummyDesign {

	@Test
	public void test() {
		DummyDesign gasti = new DummyDesign();
		assertSame(1,gasti.integrante1());
	}

}
